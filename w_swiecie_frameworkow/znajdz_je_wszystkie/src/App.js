import { useEffect, useState, useContext } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import PokemonsList from "./components/Pokemons/PokemonsList";
import AppContext from "./store/app-context";

function App() {
  //
  //vars
  const [foundPokemon, setFoundPokemon] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const [isPokemonLoading, setPokemonIsLoading] = useState(false);
  const [pokemonError, setPokemonError] = useState(null);
  const [isPokemonAdded, setIsPokemonAdded] = useState(false);

  const [isShowPokedex, setIsShowPokedex] = useState(false);

  const ctx = useContext(AppContext);

  //
  //effects
  useState(() => {
    setPokedex(JSON.parse(localStorage.getItem("pokedexArray") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("pokedexArray", JSON.stringify(pokedex));
  }, [pokedex]);

  useEffect(() => {
    if (isShowPokedex) setFoundPokemon(pokedex);
    else setFoundPokemon([]);
  }, [isShowPokedex, pokedex]);

  //
  //func
  function addPokemonToPokedexHandler(pokemon) {
    const updatedPokedex = pokedex.slice();
    updatedPokedex.push(pokemon);
    setPokedex(updatedPokedex);
    setIsPokemonAdded(true);
  }

  function deletePokemonFromPokedexHandler(id) {
    const updatedPokedex = pokedex.filter((pokemon) => pokemon.id !== id);
    setPokedex(updatedPokedex);
  }

  async function pokemonsFetchRequestHandler(query) {
    setPokemonIsLoading(true);
    setPokemonError(null);
    setIsShowPokedex(false);
    setIsPokemonAdded(false);

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${query}`
      );

      if (!response.ok) {
        throw new Error("Coś poszło nie tak. Może nie ma takiego Pokemona?...");
      }

      const data = await response.json();

      const transformData = {};
      for (const key in data) {
        if (key === "id") transformData.id = data.id;
        if (key === "name") transformData.name = data.name;
        if (key === "sprites") transformData.img = data.sprites.front_default;
        if (key === "abilities")
          transformData.abilities = data.abilities.map((ability) => {
            return ability.ability.name;
          });
      }

      setFoundPokemon([transformData]);
    } catch (error) {
      setPokemonError(error.message);
    }
    setPokemonIsLoading(false);
  }

  function toggleShowPokedexHandler() {
    setIsShowPokedex((previousState) => !previousState);
  }

  return (
    <AppContext.Provider
      value={{
        isShowPokedex: isShowPokedex,
        toggleIsShowPokedex: toggleShowPokedexHandler,
      }}
    >
      <Header
        onFetchRequest={pokemonsFetchRequestHandler}
        onToggleShowPokedex={toggleShowPokedexHandler}
        pokedexContent={pokedex}
      />
      <PokemonsList
        pokemon={foundPokemon}
        isLoading={isPokemonLoading}
        error={pokemonError}
        isPokemonAdded={isPokemonAdded}
        onAddPokemon={addPokemonToPokedexHandler}
        onDeletePokemon={deletePokemonFromPokedexHandler}
        pokedexContent={pokedex}
      />
    </AppContext.Provider>
  );
}
export default App;
