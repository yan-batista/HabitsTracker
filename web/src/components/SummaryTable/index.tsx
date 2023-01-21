import { Container, Column, WeekDay } from "./styles";

import { Square } from "../HabitDay/styles";
import { generateDatesFromYearBeginning } from "../../utils/generate-dates-from-year-beginning";

const summaryDates = generateDatesFromYearBeginning();
const minumumAmountOfDays = 18 * 7; // 18 semanas
const amountOfDaysToFill = minumumAmountOfDays - summaryDates.length;
const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const generateGridDays = () => {
  return weekDays.map((weekDay, idx) => {
    return (
      <WeekDay className="dia" key={idx}>
        {weekDay}
      </WeekDay>
    );
  });
};

const generateGridDates = () => {
  return summaryDates.map((date) => {
    return <Square key={date.toString()}></Square>;
  });
};

const SummaryTable = () => {
  return (
    <Container className="container">
      <Column className="grid">{generateGridDays()}</Column>
      <Column className="grid">
        {generateGridDates()}
        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, idx) => {
            return <Square key={idx} opacity={0.8} cursorAllowed={false}></Square>;
          })}
      </Column>
    </Container>
  );
};

export default SummaryTable;
