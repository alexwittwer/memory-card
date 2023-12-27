import { useState, useEffect } from "react";

export default function Card({ pokemonName }) {
  const [pokemon, setPokemon] = useState();

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
    getPokemon(pokemonName);
  }, []);

  console.log(pokemon);

  return (
    <>
      <article className="card max-w-48 bg-slate-100 text-slate-900 rounded-md flex flex-col justify-center items-center">
        <h1 className="text-3xl">{pokemon && pokemon.name}</h1>
        <img
          src={
            pokemon && pokemon.sprites.other["official-artwork"].front_default
          }
          alt=""
        />
      </article>
    </>
  );
}
