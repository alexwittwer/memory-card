import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import GameOver from "./GameOver";

export default function App() {
  const [score, setScore] = useState(0);
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
  const maxScore = cutePokemon.length;

  function increaseScore() {
    return setScore(score + 1);
  }

  function resetScore() {
    return setScore(0);
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
      <Header score={score} />
      <main className="grid grid-cols-5 place-items-center gap-4 m-5">
        {gameover || score === cutePokemon.length ? (
          <GameOver
            resetScore={resetScore}
            resetGame={resetGame}
            score={score}
            maxScore={maxScore}
          />
        ) : (
          ""
        )}
        {shuffle(cutePokemon).map((pokemon) => (
          <Card
            key={pokemon}
            pokemonname={pokemon}
            increaseScore={increaseScore}
            resetScore={resetScore}
            endGame={endGame}
            gameover={gameover}
            maxScore={maxScore}
            score={score}
          />
        ))}
      </main>
    </div>
  );
}
