import React, { useContext } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import AppContext from "../../store/app-context";

import classes from "./PokemonItem.module.css";

const PokemonItem = (props) => {
  //
  //vars
  const ctx = useContext(AppContext);

  //
  //func
  function addToPokedexHandler() {
    props.onAddPokemon(props.pokemon);
  }

  function deleteFromPokedexHandler() {
    props.onDeletePokemon(props.pokemon.id);
  }

  //
  //content--start
  let content = "";
  if (ctx.isShowPokedex) {
    content = (
      <Button onClick={deleteFromPokedexHandler} isActive={true}>
        Skasuj
      </Button>
    );
  }
  if (!ctx.isShowPokedex && props.isPokemonInPokedex) {
    content = <Button isActive={false}>Already in Pokedex</Button>;
  }
  if (!ctx.isShowPokedex && !props.isPokemonInPokedex) {
    content = (
      <Button isActive={true} onClick={addToPokedexHandler}>
        Add to Pokedex
      </Button>
    );
  }
  //
  //content-end

  //
  //jsx
  return (
    <Card widthProp="220px" heightProp="250px">
      <div className={classes["pokemon-item"]}>
        <div>
          <img
            className={classes["pokemon-img"]}
            src={props.pokemon.img}
            alt={props.pokemon.name}
          />
        </div>
        <div className={classes["name-div"]}>
          <span className={classes.name}>{props.pokemon.name}</span>
        </div>
        <div>
          {props.pokemon.abilities.map((ability) => (
            <span className={classes.abilities} key={ability}>
              {ability}
            </span>
          ))}
        </div>
        <div className={classes["button-div"]}>{content}</div>
      </div>
    </Card>
  );
};
export default PokemonItem;
