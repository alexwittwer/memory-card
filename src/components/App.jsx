import { useState, useEffect } from "react";
import Card from "./Card";
import Counter from "./Counter";

export default function App() {
  const [count, setCount] = useState(0);

  const cutePokemon = [
    { name: "pikachu", clicked: false },
    { name: "eevee", clicked: false },
    { name: "jigglypuff", clicked: false },
    { name: "togepi", clicked: false },
    { name: "gothita", clicked: false },
    { name: "sylveon", clicked: false },
    { name: "teddiursa", clicked: false },
    { name: "chikorita", clicked: false },
    { name: "vulpix", clicked: false },
    { name: "rowlet", clicked: false },
    { name: "sobble", clicked: false },
    { name: "minccino", clicked: false },
    { name: "mudkip", clicked: false },
    { name: "growlithe", clicked: false },
    { name: "trubbish", clicked: false },
  ];

  function handleCount() {
    return setCount(count + 1);
  }

  function resetCount() {
    return setCount(0);
  }

  // Fisher-Yates shuffle
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  return (
    <section>
      <p>Current Count: {count}</p>
      <p className="flex gap-1">
        Max Count: <Counter count={count} />
      </p>
      <div className="grid grid-cols-5 place-items-center gap-4 m-5">
        {shuffle(cutePokemon).map((pokemon, index) => (
          <Card
            key={index}
            pokemonObj={pokemon}
            handleCount={handleCount}
            resetCount={resetCount}
          />
        ))}
      </div>
    </section>
  );
}
