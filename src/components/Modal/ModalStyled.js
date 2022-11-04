import styled from "styled-components";

export const Overlay = styled.div `
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperModal = styled.div `
  background-color: #181818;
  border-radius: 0;
  box-shadow: rgba(100,100,111,0.2) 0 7px 29px 0;
  max-width: 540px;
  min-height: 100px;
  padding: 1rem;
  position: relative;
  width: 100%;
`;

export const HeaderModal = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding-bottom: 1rem;

  h2 {
    color: #fce617;
    font-size: 25.6px;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 25.2px;
    margin: 14px 0 18px;
    padding: 0 18px;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const CloseButton = styled.button `
  position: absolute;
  top: 0.25rem;
  right: 0.5rem;

  border: none;
  border-radius: 5px;
  background: none;
  color: #505050;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
  height: 1.5rem;
  transition: .3s ease all;
  width: 1.5rem;

  &:hover {
    color: #b4b3b3;
  }
`;

export const ContentModal = styled.div `
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding: 0 1rem;
`;

export const InputModal = styled.input `
  border-color: inherit;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  flex-grow: 1;
  font-size: 1.1rem;
  height: 40px;
  line-height: 40px;
  margin-bottom: 1rem;
  padding: 0 15px;
`;

export const ButtonModal = styled.button `
  background-color: #484848;
  border-color: transparent;
  border-radius: 0.25rem;
  color: #f4f5f5;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 2.5rem;
  max-width: 220px;
  padding-top: 0;
  text-shadow: none;
  transition: .3s ease all;
  width: 100%;

  &:hover {
    background: rgb(16, 106, 224);
  }
`;

export const LoginButton = styled.button `
  background-color: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: rgba(255,255,255,0.60);
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  height: auto;
  letter-spacing: 1px;
  line-height: 1.3rem;
  overflow: hidden;
  position: relative;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover{
    color: #fce617;
  }
`;

