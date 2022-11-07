import React from "react";
import { HomeContent } from "./HomeStyled";
import { useLoggedContext } from "../../application/PageLayout";
import { StarshipButton } from "../Starships/StarshipsStyled";

const Home = () => {
  const [logged, setLogged] = useLoggedContext ();

  return (
    <HomeContent>
      {logged &&
        <h1>Welcome back, friend!</h1>
      }
      {!logged &&
        <StarshipButton onClick={()=>{}}>
          Login to start the journey
        </StarshipButton>
      }
    </HomeContent>
  )
}

export default Home;