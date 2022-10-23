import React from "react";
import { useParams } from "react-router-dom";

const StarshipDetail = () => {
  const {id} = useParams()
  const [starships, setStarships] = React.useState([]);
  const [starship, setStarship] = React.useState([]);

  React.useEffect(()=>{
    fetch('https://swapi.dev/api/starships/')
      .then((response) => response.json())
      .then((data) => {
        setStarships(data.results)
      });
  },[])

  React.useEffect(()=>{
    const result = starships.find(item => item.url === `https://swapi.dev/api/starships/${id}/`);
    setStarship(result)
  },[starships])

  console.log(starship)

  return (
    <div>
      {starship !== undefined &&
        <div>
          <p>Name: {starship.name}</p>
          <p>Model: {starship.model}</p>
          <p>Manufacturer: {starship.manufacturer}</p>
          <p>Starship Class: {starship.starship_class}</p>
          <p>Lenght: {starship.length}</p>
          <p>Crew: {starship.crew}</p>
          <p>Passengers: {starship.passengers}</p>
          <p>MGLT: {starship.MGLT}</p>
          <p>Cargo Capacity: {starship.cargo_capacity}</p>
          <p>Consumables: {starship.consumables}</p>
          <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
          <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
          <p>Cost in credits: {starship.cost_in_credits}</p>
          {/*{starship.films.map(film => <p key={film}>{film}</p>)}
          {starship.pilots.map(pilot => <p key={pilot}>{pilot}</p>)}*/}
        </div>
      }
    </div>
    )
}

export default StarshipDetail;
