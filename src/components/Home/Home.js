import React from "react";
import { Link } from "react-router-dom";
import { StarshipButton } from "../Starships/StarshipsStyled";
import { HomeContent } from "./HomeStyled";

const Home = () => {
  return (
    <HomeContent>
      <h1>Welcome friend!</h1>
      <Link to={'/starships'}>
        <StarshipButton>Start the journey</StarshipButton>
      </Link>
    </HomeContent>
  )
}

export default Home;