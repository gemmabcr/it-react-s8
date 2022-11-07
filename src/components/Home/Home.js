import React from "react";
import { HomeContent } from "./HomeStyled";
import { useLoggedContext } from "../../application/PageLayout";
import {StarshipButton} from "../Starships/StarshipsStyled";
import {Link} from "react-router-dom";

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