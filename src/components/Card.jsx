import { useState, useEffect } from "react";

export default function Card({
  pokemonname,
  increaseCount,
  endGame,
  gameover,
}) {
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

  useEffect(() => {
    if (gameover) {
      setClicked(false);
    }
  }, [gameover]);

  function handleClick() {
    return setClicked(true);
  }

  return (
    <>
      <article
        onClick={() => {
          if (clicked) {
            endGame();
          } else {
            increaseCount();
          }
          handleClick();
        }}
        className="card max-w-48 bg-slate-100 text-slate-900 rounded-md flex flex-col justify-center items-center"
      >
        <h1 className="text-3xl">
          {pokemon &&
            pokemonname.charAt(0).toUpperCase() + pokemonname.slice(1)}
        </h1>
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
