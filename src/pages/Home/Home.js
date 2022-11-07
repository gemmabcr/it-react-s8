import React from "react";
import { Link } from "react-router-dom";
import { HomeContent } from "./HomeStyled";
import { StarshipButton } from "../Starships/StarshipsStyled";
import { useLoggedContext } from "../../application/PageLayout";

const Home = () => {
  const [logged, setLogged] = useLoggedContext ();

  return (
    <HomeContent>
      <h1>{logged ? 'Welcome back, friend!' : 'Login to start the journey'}</h1>
      {logged &&
        <Link to={'/starships'}>
          <StarshipButton>Start the journey</StarshipButton>
        </Link>
      }
    </HomeContent>
  )
}

export default Home;