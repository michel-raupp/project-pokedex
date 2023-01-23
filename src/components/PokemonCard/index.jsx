import * as React from "react";
import { Card, Texts, PokeType} from "./styles";
import { Container } from "../../styles/Styles";
import PokemonImage from "./PokemonImage";


export default function PokemonCard({ name, image, types}) {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " - " + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <Card>
      <PokemonImage
        poke={image}
        name={name} />
      <Container>
        <Texts>
          <h2>
            {name}
          </h2>
          <>
            <PokeType className={`typeHandler(${types[0].type.name})`}>
              {typeHandler()}
            </PokeType>
          </>
        </Texts>
      </Container>
    </Card>
  );
}