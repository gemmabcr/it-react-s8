import React, {Fragment} from "react";
import { CardContainer, CardContent, CardImage } from "../PilotCard/CardStyled";

const FilmCard = ({url, id}) => {
  const [film, setFilm] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [image, setImage] = React.useState('')

  React.useEffect(()=>{
    fetch(url)
      .then((response) => response.json())
      .then(data => {
        setFilm(data)
        setImage(`https://starwars-visualguide.com/assets/img/films/${id}.jpg`)
      })
      .catch((error) => {console.log(error)})
      .finally(()=>{setLoading(false)})
  }, [])

  return(
    <Fragment>
      {loading && <p>Loading...</p>}
      {!loading &&
        <CardContainer>
          <CardImage src={image} alt={film.title} />
          <CardContent>
            <p>{film.title}</p>
            <p>Director: {film.director}</p>
            <p>Release: {(film.release_date).slice(0,4)}</p>
          </CardContent>
        </CardContainer>
      }
    </Fragment>
  )
};

export default FilmCard;
