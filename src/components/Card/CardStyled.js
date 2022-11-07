import styled from "styled-components";

export const CardContainer = styled.div `
  align-items: center;
  background-color: #2a2a2a;
  border-radius: 0.1875rem;
  color: #b9b9b9;
  display: flex;
  margin: 0 auto;
  max-width: 100rem;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 100%;
`;

export const CardContent = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const CardImage = styled.img`
  height: 200px;
  object-position: center;
  object-fit: contain;
  width: 200px;
`;