import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import GameOver from "./GameOver";

export default function App() {
  const [count, setCount] = useState(0);
  const [gameover, setGameover] = useState(false);

  const cutePokemon = [
    "pikachu",
    "eevee",
    "gothita",
    "teddiursa",
    "chikorita",
    "rowlet",
    "sobble",
    "minccino",
    "mudkip",
    "growlithe",
  ];

  function increaseCount() {
    return setCount(count + 1);
  }

  function resetCount() {
    return setCount(0);
  }

  function endGame() {
    return setGameover(true);
  }

  function resetGame() {
    return setGameover(false);
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
    <div>
      <Header count={count} />
      <main className="grid grid-cols-5 place-items-center gap-4 m-5">
        {gameover || count === cutePokemon.length ? (
          <GameOver
            resetCount={resetCount}
            resetGame={resetGame}
            count={count}
            maxScore={cutePokemon.length}
          />
        ) : (
          ""
        )}
        {shuffle(cutePokemon).map((pokemon) => (
          <Card
            key={pokemon}
            pokemonname={pokemon}
            increaseCount={increaseCount}
            resetCount={resetCount}
            endGame={endGame}
            gameover={gameover}
          />
        ))}
      </main>
    </div>
  );
}
