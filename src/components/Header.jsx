import Scorecard from "./Scorecard";
import pokemon_logo from "../assets/pokemon_logo.svg";

export default function Header({
  score,
  selectDifficulty,
  resetScore,
  difficulty,
}) {
  return (
    <header>
      <div className="flex flex-col gap-2 justify-center items-center bg-red-800 p-2">
        <img className="max-w-60" src={pokemon_logo} alt="" />
        <h1 className="text-red-50">The Pokemon Memory Card game</h1>
      </div>
      <div className="counter text-red-50 flex flex-col justify-end items-end p-3">
        <Scorecard score={score} />
      </div>
      <div className="flex justify-center items-center gap-5 my-3 ">
        <button
          className={`difficulty p-1 rounded-md border-2 ${
            difficulty === 0 ? "bg-red-700 text-red-50" : ""
          }`}
          onClick={() => {
            selectDifficulty(0);
            resetScore();
          }}
        >
          Easy
        </button>
        <button
          className={`difficulty p-1 rounded-md border-2 ${
            difficulty === 1 ? "bg-red-700 text-red-50" : ""
          }`}
          onClick={() => {
            selectDifficulty(1);
            resetScore();
          }}
        >
          Medium
        </button>
        <button
          className={`difficulty p-1 rounded-md border-2 ${
            difficulty === 2 ? "bg-red-700 text-red-50" : ""
          }`}
          onClick={() => {
            selectDifficulty(2);
            resetScore();
          }}
        >
          Hard
        </button>
      </div>
    </header>
  );
}
