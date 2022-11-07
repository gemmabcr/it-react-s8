import styled from "styled-components";

export const StarshipCard = styled.ul `
  background: rgba(24,24,24,0.75);
  border-radius: 0.25rem;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  padding: 1rem;

  &:hover{
    background: rgba(24,24,24,0.92);
    cursor: pointer;
  }
`;

export const StarshipCardTitle = styled.li `
  list-style: none;
  margin-bottom: 0.5rem;
`;

export const StarshipCardSubtitle = styled.li `
  color: rgba(255,255,255,0.60);
  list-style: none;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`;

export const StarshipButtonContainer = styled.div `
  display: flex;
  justify-content: center;
`;

export const StarshipButton = styled.button `
  background-color: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: rgba(255,255,255,0.60);
  display: inline-block;
  font-size: 1.15rem;
  height: auto;
  line-height: 1.3rem;
  overflow: hidden;
  padding: 14px 30px 10px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover{
    background-color: rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.87);
  }
`;