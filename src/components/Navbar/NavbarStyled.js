import styled from "styled-components";

export const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: end;
  margin: 0 auto;
  height: 136px;
  padding: 1.5rem;
  position: relative;
`;

export const LogoContainer = styled.div `
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  position: absolute;
`;

export const Logo = styled.img `
  height: 100%;
  object-fit: contain;
  max-height: 88px;
  max-width: 203px;
  width: 100%;
`;

export const LoginContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LinksMenu = styled.div `
  border-top: 0.5px solid rgba(255,255,255,0.39);
  border-bottom: 0.5px solid rgba(255,255,255,0.39);
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LinkMenu = styled.div `
  border: 0.5px solid rgba(255,255,255,0.39);
  padding: 0.5rem;
`;

export const LoginButton = styled.button `
  background-color: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: rgba(255,255,255,0.60);
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  height: auto;
  letter-spacing: 1px;
  line-height: 1.3rem;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover{
    color: rgba(255,255,255,0.87);
  }
`;
