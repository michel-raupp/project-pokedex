import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";
import { Skeletons } from "../components/Skeletons";
import { Container } from "../styles/Styles";
import { Background, Header } from "./styles";
import evo from "../assets/poke-evo.gif"


export const Home = () => {

    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {

        var endpoints = [];
        for (var i = 1; i < 152; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }

        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).
            then((res) => setPokemons(res));
    };


    const pokemonFilter = (name) => {
        var filteredPokemons = [];
        name = name.toLowerCase().trim();

        if (name === "") {
            getPokemons();
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i]);
            }
        }

        setPokemons(filteredPokemons);
    };

    return (
        <div>

            <Navbar pokemonFilter={pokemonFilter} />
            {/* <img src={bg}/> */}

            <Background>
                <Header>
                    <img src={evo} />
                    <Container style={{flexDirection: "column"}}>
                        <h1>
                            Hello Trainer, welcome to the world of Pokémon!
                        </h1>
                        <p>
                            This is a Pokédex project which you can search all Kanto's Pokémons. This project was built on ReactJS and styled componets, using the PokeAPI.
                        </p>

                        <a href="https://github.com/michel-raupp/project-pokedex" target="_blank"><p>Open GitHub</p></a>

                    </Container>
                </Header>
                <Container>
                    <Grid className="Spacing">
                        {pokemons.length === 0 ? (
                            <Skeletons />
                        ) : (
                            pokemons.map((pokemon, key) => (
                                <Grid key={key}>
                                    <PokemonCard name={pokemon.data.name}
                                        // image={pokemon.data.sprites.front_default}
                                        image={pokemon.data.sprites.versions["generation-v"]["black-white"].animated.front_default}
                                        types={pokemon.data.types} />
                                </Grid>
                            ))
                        )}
                    </Grid>

                </Container>

            </Background>
        </div>
    );
};