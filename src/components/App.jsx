import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import GameOver from "./GameOver";

export default function App() {
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState(false);
  const [difficulty, setDifficulty] = useState(1);
  const [lightMode, setLightMode] = useState(false);

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
  let pokemonList;
  let maxScore;

  switch (difficulty) {
    case 0:
      maxScore = EASY;
      pokemonList = POKEMON_CACHE.slice(0, EASY);
      break;
    case 1:
      maxScore = MEDIUM;
      pokemonList = POKEMON_CACHE.slice(0, MEDIUM);
      break;
    case 2:
      maxScore = HARD;
      pokemonList = POKEMON_CACHE.slice(0, HARD);
      break;
    case 3:
      maxScore = INSANE;
      pokemonList = POKEMON_CACHE.slice(0, INSANE);
      break;
  }

  maxScore = pokemonList.length;

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
    endGame();
    resetGame();
    resetScore();
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
    <div className="">
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
      <Header
        score={score}
        selectDifficulty={selectDifficulty}
        resetScore={resetScore}
        endGame={endGame}
        resetGame={resetGame}
        difficulty={difficulty}
      />
      {difficulty === 3 ? (
        <div className="flex justify-center text-slate-50 items-center bg-red-700 ">
          INSANE MODE UNLOCKED
        </div>
      ) : (
        ""
      )}
      <main className="h-full grid grid-cols-5 place-items-center gap-4 p-5 m-5 overflow-y-auto">
        {shuffle(pokemonList).map((pokemon) => (
          <Card
            key={pokemon}
            pokemonname={pokemon}
            increaseScore={increaseScore}
            resetScore={resetScore}
            endGame={endGame}
            score={score}
          />
        ))}
      </main>
    </div>
  );
}
