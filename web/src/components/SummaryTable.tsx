import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import HabitDay from "./HabitDay";

const summaryDates = generateDatesFromYearBeginning();
const minumumAmountOfDays = 18 * 7; // 18 semanas
const amountOfDaysToFill = minumumAmountOfDays - summaryDates.length;
const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const generateGridDays = () => {
  return weekDays.map((weekDay, idx) => {
    return (
      <div key={idx} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
        {weekDay}
      </div>
    );
  });
};

const generateGridDates = () => {
  return summaryDates.map((date) => {
    return <HabitDay key={date.toString()} amount={5} completed={Math.random() * 5} />;
  });
};

const SummaryTable = () => {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">{generateGridDays()}</div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {generateGridDates()}
        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, idx) => {
            return (
              <div
                key={idx}
                className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              />
            );
          })}
      </div>
    </div>
  );
};

export default SummaryTable;
