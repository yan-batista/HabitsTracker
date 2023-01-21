import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const MainContainer = styled.main`
  width: 100%;
  max-width: 1024px; //100% if mobile

  padding: 24px;

  display: flex;
  flex-direction: column;

  gap: 64px;
`;
