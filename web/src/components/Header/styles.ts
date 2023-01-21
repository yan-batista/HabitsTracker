import styled from "styled-components";
import colors from "../../styles/colors";

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 720px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img.attrs((props) => {
  src: props.src;
  alt: props.alt;
})``;

export const Button = styled.button`
  border: 1px solid ${colors.violet500};
  border-radius: 8px;

  font-weight: 600;

  background-color: transparent;

  padding: 16px 24px;
  gap: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    border-color: ${colors.violet300};
  }
`;
