import React, {createContext, useContext} from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";

export const AppProvider = createContext();
export const useLoggedContext = () => useContext(AppProvider);

const Provider = ({ children }) =>{
  const [logged, setLogged] = React.useState(()=>{
    return JSON.parse(localStorage.getItem('logged')) === true
  });

  return (
    <AppProvider.Provider value={[logged, setLogged]}>
      {children}
    </AppProvider.Provider>
  );
}

const PageLayout = () => {
  return (
    <PageWrapper>
      <Provider>
        <Navbar />
        <Outlet />
      </Provider>
    </PageWrapper>
  )
}

export default PageLayout;

const PageWrapper = styled.div `
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
`;
