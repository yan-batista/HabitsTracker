import { prisma } from "./lib/prisma";
import { FastifyInstance } from "fastify";
import { z } from "zod";
import dayjs from "dayjs";

export async function appRoutes(app: FastifyInstance) {
  app.get("/", () => {
    const habits = prisma.habit.findMany();

    return habits;
  });

  app.post("/habits", async (request) => {
    const createHabitBody = z.object({
      title: z.string(),
      weekDays: z.array(z.number().min(0).max(6)),
    });

    const { title, weekDays } = createHabitBody.parse(request.body);

    const today = dayjs().startOf("day").toDate();

    await prisma.habit.create({
      data: {
        title,
        created_at: today,
        weekDays: {
          create: weekDays.map((weekDay) => {
            return {
              week_day: weekDay,
            };
          }),
        },
      },
    });
  });

  app.get("/day", async (request) => {
    const getDayParams = z.object({
      date: z.coerce.date(),
    });

    const { date } = getDayParams.parse(request.query);

    const parsedDate = dayjs(date).startOf("day");
    const weekDay = parsedDate.get("day");

    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date,
        },
        weekDays: {
          some: {
            week_day: weekDay,
          },
        },
      },
    });

    const day = await prisma.day.findUnique({
      where: {
        date: parsedDate.toDate(),
      },
      include: {
        dayHabits: true,
      },
    });

    const completedHabits =
      day?.dayHabits.map((dayHabit) => {
        return dayHabit.habit_id;
      }) ?? [];

    return {
      possibleHabits,
      completedHabits,
    };
  });

  app.patch("/habits/:id/toggle", async (request) => {
    const toggleHabitParams = z.object({
      id: z.string().uuid(),
    });

    // pega o id do hábito
    const { id } = toggleHabitParams.parse(request.params);

    // de acordo com as regras de negócio, só podemos alterar se foi completo na data atual
    // não podemos alterar hábitos de datas passadas ou futuras

    // procura o dia atual na tabela de dias
    // um dia só é criado na tabela de dias se um hábito for completo nesse dia
    const today = dayjs().startOf("day").toDate();
    let day = await prisma.day.findUnique({
      where: {
        date: today,
      },
    });

    // se não encontrarmos esse dia na tabela, quer dizer que não foram completos hábitos
    // já que essa rota é para completar hábito, vamos criar esse dia na tabela
    if (!day) {
      day = await prisma.day.create({
        data: {
          date: today,
        },
      });
    }

    // procuramos o dayHabbit para ver se esse habito já foi marcado como completo antes

    const dayHabbit = await prisma.dayHabbit.findUnique({
      where: {
        day_id_habit_id: {
          day_id: day.id,
          habit_id: id,
        },
      },
    });

    // se esse habito foi marcado como completo antes, então essa rota irá remove-lo
    if (dayHabbit) {
      await prisma.dayHabbit.delete({
        where: {
          id: dayHabbit.id,
        },
      });
    } else {
      // se esse habito NÃO foi marcado como completo antes, então essa rota irá cria-lo
      // vamos criar uma entrada na tabela dayHabbit usando o dia de hoje e o hábito do param
      // ou seja, estamos marcando o hábito como completo
      await prisma.dayHabbit.create({
        data: {
          day_id: day.id,
          habit_id: id,
        },
      });
    }
  });

  app.get("/summary", async () => {
    // retornar uma data, quantos hábitos estão disponíveis e quantos foram completos
    const summary = await prisma.$queryRaw`
      SELECT
        D.id,
        D.date,
        (
          SELECT
            cast(count(*) as float)
          FROM day_habits DH
          WHERE DH.day_id = D.id
        ) as completed,
        (
          SELECT
            cast(count(*) as float)
          FROM habit_week_days HWD
          JOIN habits H
            on H.id = HWD.habit_id
          WHERE
            HWD.week_day = cast(strftime('%w', D.date/1000.0, 'unixepoch') as int)
            AND H.created_at <= D.date
        ) as amount
      FROM days D
    `;

    return summary;
  });
}
