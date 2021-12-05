import React, { useEffect, useState, useContext } from "react";
import AppContext from "../../store/app-context";
import PokemonItem from "./PokemonItem";

import classes from "./PokemonsList.module.css";

const PokemonsList = (props) => {
  //
  // vars
  const ctx = useContext(AppContext);
  const [pokemonsList, setPokemonsList] = useState([]);

  //
  //func
  function isPokemonAlreadyStored(id) {
    const storedIdsArray = props.pokedexContent.map((pokemon) => pokemon.id);
    return storedIdsArray.includes(id);
  }

  //effect
  useEffect(() => {
    setPokemonsList(props.pokemon);
  }, [props.pokemon]);

  //
  //content--start
  let content = (
    <div className={classes["pokemons-list"]}>
      <p className={classes.info}>
        Brak wyników do pokazania, napisz jakiego Pokemona poszukujesz.
      </p>
    </div>
  );
  if (props.isPokemonAdded) {
    content = (
      <div className={classes["pokemons-list"]}>
        <p className={classes.info}>Dodano Pokemona do Pokedex'u.</p>
      </div>
    );
  }
  if (ctx.isShowPokedex) {
    content = (
      <div className={classes["pokemons-list"]}>
        <p className={classes.info}>
          Nie masz żadnego Pokemona w swoim Pokedex'ie.
        </p>
      </div>
    );
  }
  if (pokemonsList.length > 0) {
    content = (
      <div className={classes["pokemons-list"]}>
        {pokemonsList.map((pokemon) => {
          const isPokemonInPokedex = isPokemonAlreadyStored(pokemon.id);

          return (
            <PokemonItem
              key={pokemon.id}
              pokemon={pokemon}
              onAddPokemon={props.onAddPokemon}
              onDeletePokemon={props.onDeletePokemon}
              isPokemonInPokedex={isPokemonInPokedex}
            />
          );
        })}
      </div>
    );
  }
  if (props.error && !ctx.isShowPokedex) {
    content = (
      <div className={classes["pokemons-list"]}>
        <p className={classes.info}>{props.error}</p>
      </div>
    );
  }
  if (props.isLoading) {
    content = (
      <div className={classes["pokemons-list"]}>
        <p className={classes.info}>Wczytuję...</p>
      </div>
    );
  }
  //content-end

  //
  //jsx
  return <div className={classes.container}>{content}</div>;
};

export default PokemonsList;
