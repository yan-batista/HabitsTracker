import styled from "styled-components";
import colors from "../../styles/colors";

interface Props {
  opacity?: number;
  cursorAllowed?: boolean;
}

export const Square = styled.div<Props>`
  width: 40px;
  height: 40px;

  background-color: ${colors.zinc900};
  border: 1px solid ${colors.zinc800};
  border-radius: 8px;

  opacity: ${(props) => props.opacity || "1"};
  cursor: ${(props) => (props.cursorAllowed == undefined || props.cursorAllowed == true ? "default" : "not-allowed")};
`;
