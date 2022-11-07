import React from "react";
import { CardContainer, CardContent } from "./CardStyled";

const Card = ({url}) => {
  const [item, setItem] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(()=>{
    fetch(url)
      .then((response) => response.json())
      .then(data => setItem(data))
      .catch((error) => {console.log(error)})
      .finally(()=>{setLoading(false)})
  })

  return(
    <CardContainer>
      {loading && <p>Loading...</p>}
      {!loading &&
        <CardContent>
          <p>Name: {item.name}</p>
          <p>Birth year: {item.birth_year}</p>
          <p>Eye color: {item.eye_color}</p>
          <p>Gender: {item.gender}</p>
          <p>Hair color: {item.hair_color}</p>
          <p>Skin color: {item.skin_color}</p>
          <p>Height: {item.height}</p>
          <p>Homeworld: {item.homeworld}</p>
          <p>Mass: {item.mass}</p>
          <p>Species: {item.species}</p>
        </CardContent>
      }
    </CardContainer>
  )
};

export default Card;
