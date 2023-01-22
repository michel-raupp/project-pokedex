import * as React from "react";
import { Card, Texts, PokeType, PokeID } from "./styles";
import { Container } from "../../styles/Styles";
import PokemonImage from "./PokemonImage";


export default function PokemonCard({ name, image, types, id }) {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };

  // function testNum(a) {
  //   let result;
  //   if (a > 0) {
  //     result = 'positive';
  //   } else {
  //     result = 'NOT positive';
  //   }
  //   return result;
  // }

  return (
    <Card>
      {/* <PokeID>
        {id}
      </PokeID> */}
      <PokemonImage
        poke={image}
        name={name} />
      <Container>
        <Texts>
          <h2>
            {name}
          </h2>
          
          <>
            <PokeType className={`typeHandler(tipo-${types[0].type.name})`}>
              {typeHandler()}
            </PokeType>
          </>
        </Texts>
      </Container>
    </Card>
  );
}