import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Column = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-auto-flow: column;
  gap: 8px;
`;

export const WeekDay = styled.div`
  color: ${colors.zinc400};
  font-size: 20px;
  font-weight: 700;

  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
