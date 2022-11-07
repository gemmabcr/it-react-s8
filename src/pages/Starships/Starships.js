import React from "react";
import { Link } from "react-router-dom";
import {
  StarshipCard,
  StarshipCardTitle,
  StarshipCardSubtitle,
  StarshipButton,
  StarshipButtonContainer
} from "./StarshipsStyled";

const Starships = () => {
  const [starships, setStarships] = React.useState([]);
  const [apiUrl, setApiUrl] = React.useState('https://swapi.py4e.com/api/starships');
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(()=>{
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setApiUrl(data.next)
        if (starships.length === 0) setStarships(data.results)
        else setStarships(prevState => [...prevState, ...data.results])
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false);
      });
  },[page]);

  return(
    <section>
      {loading && <p>Loading</p>}
      {!loading && starships.map((starship, index) => {
        const splitedUrlStarship = starship.url.split('/');
        const urlStarship = splitedUrlStarship[5]
        return (
          <Link to={`/starships/${urlStarship}`} key={index}>
            <StarshipCard>
              <StarshipCardTitle>{(starship.name).toUpperCase()}</StarshipCardTitle>
              <StarshipCardSubtitle>{starship.model}</StarshipCardSubtitle>
            </StarshipCard>
          </Link>
          )
        }
      )}
      {/*TODO: Bonus - scroll infinit*/}
      {apiUrl !== null && !loading &&
        <StarshipButtonContainer>
          <StarshipButton onClick={() => setPage(prevState => prevState + 1)}>View more</StarshipButton>
        </StarshipButtonContainer>
      }
    </section>
  )
}

export default Starships;