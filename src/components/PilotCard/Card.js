import React, {Fragment} from "react";
import { CardContainer, CardContent, CardImage } from "./CardStyled";

const Card = ({url, id}) => {
  const [item, setItem] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [image, setImage] = React.useState('')

  React.useEffect(()=>{
    fetch(url)
      .then((response) => response.json())
      .then(data => {
        setItem(data)
        setImage(`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`)
      })
      .catch((error) => {console.log(error)})
      .finally(()=>{setLoading(false)})
  })

  return(
    <Fragment>
      {loading && <p>Loading...</p>}
      {!loading &&
        <CardContainer>
          <CardImage src={image} alt={item.name} />
          <CardContent>
            <p>Name: {item.name}</p>
            <p>Birth year: {item.birth_year}</p>
            <p>Gender: {item.gender}</p>
            <p>Height: {item.height}</p>
            <p>Mass: {item.mass}</p>
            <p>Eye color: {item.eye_color}</p>
            <p>Hair color: {item.hair_color}</p>
            <p>Skin color: {item.skin_color}</p>
          </CardContent>
        </CardContainer>
      }
    </Fragment>
  )
};

export default Card;
