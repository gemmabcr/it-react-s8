import styled from "styled-components";

export const StarshipDetailWrapper = styled.section `
  padding: 1rem;
`;

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
  gap: 1rem;
`;

export const PilotsSection = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
`;