import React from "react";

const Starships = () => {

  const [starships, setStarships] = React.useState([]);

  React.useEffect(()=>{
    fetch('https://swapi.dev/api/starships/')
      .then((response) => response.json())
      .then((data) => {
        setStarships(data.results)
      });
  },[])

  console.log(starships)

  return(
    <div>
      <h1>Starships list</h1>
      {starships.map(starship =>
        <ul key={starship.url}>
          <li>Name: {starship.name}</li>
          <li>Model: {starship.model}</li>
        </ul>
      )}
    </div>
  )
}

export default Starships;