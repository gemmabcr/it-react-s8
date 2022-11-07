import React from "react";
import { useParams } from "react-router-dom";
import { StarshipDetailWrapper, DetailName, ImageContainer, ColumnsInfo, PilotsSection } from "./StarshipDetailStyled";
import Card from "../../components/PilotCard/Card";
import FilmCard from "../../components/FilmCard/FilmCard";

const StarshipDetail = () => {
  const {id} = useParams()
  const [starship, setStarship] = React.useState([])
  const [image, setImage] = React.useState('')
  const noImage = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
  const imagesIds = [5, 9, 10, 11, 12, 13, 15, 21, 22, 23, 27, 28, 29, 31, 39, 40, 41, 43, 47, 48]
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    const STARSHIP_URL = `https://swapi.py4e.com/api/starships/${id}/`;
    fetch(STARSHIP_URL)
      .then((response) => response.json())
      .then((data) => {
        setStarship(data)
        if (imagesIds.includes(Number(id))) setImage(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`);
        else setImage(noImage);
      })
      .finally(() => {
        setLoading(false);
      });
  },[])

  return (
    <StarshipDetailWrapper>
      {loading && <p>Loading...</p>}
      {!loading &&
        <div>
          <ImageContainer src={image} alt={starship.name} />
          <DetailName>{starship.name}</DetailName>
          <ColumnsInfo>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Starship class: {starship.starship_class}</p>
            <p>Lenght: {starship.length}</p>
            <p>Crew: {starship.crew}</p>
            <p>Passengers: {starship.passengers}</p>
            <p>MGLT: {starship.MGLT}</p>
            <p>Cargo capacity: {starship.cargo_capacity}</p>
            <p>Consumables: {starship.consumables}</p>
            <p>Hyperdrive rating: {starship.hyperdrive_rating}</p>
            <p>Max atmosphering speed: {starship.max_atmosphering_speed}</p>
            <p>Cost in credits: {starship.cost_in_credits}</p>
            {/*{starship.films.map(film => <p key={film}>{film}</p>)}*/}
          </ColumnsInfo>
          {starship.pilots && starship.pilots.length > 0 &&
            <PilotsSection>
              <p>Pilots</p>
              <ColumnsInfo>
                {starship.pilots.map(pilot => {
                  const splitedUrlPilot = pilot.split('/');
                  const idPilot = splitedUrlPilot[5]
                  return (
                      <Card key={pilot} url={pilot} id={idPilot}/>
                  )
                })}
              </ColumnsInfo>
            </PilotsSection>
          }
          {starship.films && starship.films.length > 0 &&
            <PilotsSection>
              <p>Films</p>
              <ColumnsInfo>
                {starship.films.map(film => {
                  const splitedUrlFilm = film.split('/');
                  const idFilm = splitedUrlFilm[5]
                  return (
                    <FilmCard key={film} url={film} id={idFilm}/>
                  )
                })}
              </ColumnsInfo>
            </PilotsSection>
          }
        </div>
      }
    </StarshipDetailWrapper>
  )
}

export default StarshipDetail;
