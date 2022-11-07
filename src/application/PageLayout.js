import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import React from "react";

const PageLayout = () => {
  const [logged, setLogged] = React.useState(()=>{
    return JSON.parse(localStorage.getItem('logged')) === true
  });

  return (
    <PageWrapper>
      <Navbar
        logged={logged}
        setLogged={setLogged}
      />
      <Outlet />
    </PageWrapper>
  )
}

export default PageLayout;

const PageWrapper = styled.div `
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
`;