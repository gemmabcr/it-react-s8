import React, {Fragment} from "react";
import { CardContainer, CardContent, CardImage } from "../PilotCard/CardStyled";

const FilmCard = ({url, id}) => {
  const [title, setTitle] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [image, setImage] = React.useState('')

  React.useEffect(()=>{
    fetch(url)
      .then((response) => response.json())
      .then(data => {
        setTitle(data.title)
        setImage(`https://starwars-visualguide.com/assets/img/films/${id}.jpg`)
      })
      .catch((error) => {console.log(error)})
      .finally(()=>{setLoading(false)})
  })

  return(
    <Fragment>
      {loading && <p>Loading...</p>}
      {!loading &&
        <CardContainer>
          <CardImage src={image} alt={title} />
          <CardContent>
            <p>{title}</p>
          </CardContent>
        </CardContainer>
      }
    </Fragment>
  )
};

export default FilmCard;
