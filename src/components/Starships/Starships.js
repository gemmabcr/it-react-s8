import React from "react";
import {Link} from "react-router-dom";

const Starships = () => {
  const [starships, setStarships] = React.useState([]);

  React.useEffect(()=>{
    fetch('https://swapi.dev/api/starships/')
      .then((response) => response.json())
      .then((data) => {
        setStarships(data.results)
      });
  },[])

  return(
    <div>
      <h1>Starships list</h1>
      {starships.map(starship => {
        const splitedUrlStarship = starship.url.split('/');
        const urlStarship = splitedUrlStarship[5]
        return (
            <ul key={urlStarship}>
              <li>Name: {starship.name}</li>
              <li>Model: {starship.model}</li>
              <li>URL: {starship.url}</li>
              <Link to={`/starships/${urlStarship}`}>Details</Link>
            </ul>
          )
        }
      )}
    </div>
  )
}

export default Starships;