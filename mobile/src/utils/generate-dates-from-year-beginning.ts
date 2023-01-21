import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {
  const firstDayOfTheYear = dayjs().startOf("year"); // pega o primeiro dia do ano
  const today = new Date(); // pega a data atual

  const dates = [];
  let compareDate = firstDayOfTheYear; // será utilizada para comparação

  // se a data de comparação for anterior a data atual
  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate()); // joga essa data no vetor
    compareDate = compareDate.add(1, "day"); // adiciona um dia na data de comparação
  }

  return dates;
}
