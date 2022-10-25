import styled from "styled-components";

export const ImageContainer = styled.img `
  border-bottom: 1px solid darkblue;
  height: 400px;
  margin-bottom: 2rem;
  object-position: center;
  object-fit: contain;
  width: 100%;
`;

export const DetailName = styled.p `
  color: rgba(255,255,255,0.87);
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

export const ColumnsInfo = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;
`;