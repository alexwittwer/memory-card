import { useState, useEffect } from "react";
import Card from "./Card";

export default function App() {
  const [state, setState] = useState();

  return (
    <section className="grid grid-cols-5 place-items-center gap-4 m-5">
      <Card pokemonName={"squirtle"} />
      <Card pokemonName={"poltchageist"} />
      <Card pokemonName={"pikachu"} />
      <Card pokemonName={"charmander"} />
      <Card pokemonName={"bulbasaur"} />
      <Card pokemonName={"mew"} />
      <Card pokemonName={"togepi"} />
      <Card pokemonName={"eevee"} />
      <Card pokemonName={"teddiursa"} />
      <Card pokemonName={"emolga"} />
    </section>
  );
}
