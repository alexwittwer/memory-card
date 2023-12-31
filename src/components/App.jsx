import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import GameOver from "./GameOver";

export default function App() {
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState(false);
  const [difficulty, setDifficulty] = useState(3);

  const EASY = 5;
  const MEDIUM = 10;
  const HARD = 20;
  const INSANE = 40;
  const POKEMON_CACHE = [
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
    "bulbasaur",
    "squirtle",
    "plusle",
    "meowth",
    "mew",
    "sandshrew",
    "vulpix",
    "smeargle",
    "emolga",
    "psyduck",
    "jigglypuff",
    "magikarp",
    "eelektrik",
    "dratini",
    "snorlax",
    "cyndaquil",
    "torchic",
    "froakie",
    "snivy",
    "gible",
    "lapras",
    "duskull",
    "togepi",
    "absol",
    "lucario",
    "greninja",
    "zorua",
    "gardevoir",
    "charmander",
    "articuno",
  ];

  console.log(POKEMON_CACHE.length);
  let pokemonList;

  switch (difficulty) {
    case 0:
      pokemonList = POKEMON_CACHE.slice(0, EASY);
      break;
    case 1:
      pokemonList = POKEMON_CACHE.slice(0, MEDIUM);
      break;
    case 2:
      pokemonList = POKEMON_CACHE.slice(0, HARD);
      break;
    case 3:
      pokemonList = POKEMON_CACHE.slice(0, INSANE);
      break;
  }
  const maxScore = pokemonList.length;

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

  function selectDifficulty(choice) {
    return setDifficulty(choice);
  }

  function selectInsane() {
    return setDifficulty(3);
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
      <Header
        score={score}
        selectDifficulty={selectDifficulty}
        resetScore={resetScore}
        endGame={endGame}
        resetGame={resetGame}
        difficulty={difficulty}
      />
      {difficulty === 3 ? (
        <div className="flex justify-center items-center bg-red-700 ">
          INSANE MODE UNLOCKED
        </div>
      ) : (
        ""
      )}
      <main className="grid grid-cols-5 place-items-center gap-4 m-5">
        {gameover || score === pokemonList.length ? (
          <GameOver
            resetScore={resetScore}
            resetGame={resetGame}
            score={score}
            maxScore={maxScore}
            selectInsane={selectInsane}
            difficulty={difficulty}
          />
        ) : (
          ""
        )}
        {shuffle(pokemonList).map((pokemon) => (
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
