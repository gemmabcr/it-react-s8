import React from "react";
import { Link } from "react-router-dom";
import {StarshipButton} from "../Starships/StarshipsStyled";
import {HomeWrapper, HomeContent} from "./HomeStyled";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <HomeWrapper>
      <Navbar />
      <HomeContent>
        <h1>Welcome friend!</h1>
        <Link to={'/starships'}>
          <StarshipButton>Start the journey</StarshipButton>
        </Link>
      </HomeContent>
    </HomeWrapper>
  )
}

export default Home;