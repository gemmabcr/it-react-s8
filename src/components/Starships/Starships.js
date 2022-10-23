import React from "react";
import {Link} from "react-router-dom";

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
    <div>
      <h1>Starships list</h1>
      {loading && <p>Loading</p>}
      {!loading && starships.map((starship, index) => {
        const splitedUrlStarship = starship.url.split('/');
        const urlStarship = splitedUrlStarship[5]
        return (
            <ul key={index}>
              <p>{index}</p>
              <li>Name: {starship.name}</li>
              <li>Model: {starship.model}</li>
              <li>URL: {starship.url}</li>
              <Link to={`/starships/${urlStarship}`}>Details</Link>
            </ul>
          )
        }
      )}
      {apiUrl !== null && <button onClick={() => setPage(prevState => prevState + 1)}>View more</button>}
    </div>
  )
}

export default Starships;