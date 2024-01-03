import { useState, useEffect } from "react";
import pokeball from "../assets/pokeball.svg";

export default function Card({ pokemonname, increaseScore, endGame, score }) {
  const [pokemon, setPokemon] = useState();
  const [clicked, setClicked] = useState(false);

  async function getPokemon(pokemon) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
        mode: "cors",
      });
      const parsed = await res.json();
      setPokemon(parsed);
    } catch (error) {
      console.error("Error fetching pokemon data", error);
    }
  }

  useEffect(() => {
    getPokemon(pokemonname);
  }, [pokemonname]);

  // resets clicks if game ends, or player changes difficulty
  useEffect(() => {
    if (score === 0) {
      setClicked(false);
    }
  }, [score]);

  function handleClick() {
    return setClicked(true);
  }

  return (
    <>
      <article
        onClick={() => {
          if (clicked) {
            endGame();
          } else{
          increaseScore();
          handleClick();}
        }}
        className="card max-w-48 bg-slate-100 text-slate-900 rounded-md flex flex-col justify-center items-center"
      >
        <h1 className="text-3xl">
          {pokemon &&
            pokemonname.charAt(0).toUpperCase() + pokemonname.slice(1)}
        </h1>
        <img
          src={
            pokemon
              ? pokemon.sprites.other["official-artwork"].front_default
              : pokeball
          }
          className="min-w-32"
          alt=""
        />
      </article>
    </>
  );
}
