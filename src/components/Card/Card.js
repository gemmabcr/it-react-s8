import styled from "styled-components";

const Card = () => {
  return(
    <CardContainer>
      <h1>Holi</h1>
    </CardContainer>
  )
};

export default Card;

export const CardContainer = styled.div `
  background-color: #2a2a2a;
  border-radius: 0.1875rem;
  color: #b9b9b9;
  margin: 0 auto;
  max-width: 100rem;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 100%;
`;