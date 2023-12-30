import Scorecard from "./Scorecard";
import pokemon_logo from "../assets/pokemon_logo.svg";

export default function Header({ score }) {
  return (
    <header>
      <div className="flex flex-col gap-2 justify-center items-center bg-red-800 p-2">
        <img className="max-w-60" src={pokemon_logo} alt="" />
        <h1 className="text-red-50">The Pokemon Memory Card game</h1>
      </div>
      <div className="counter text-red-50 flex flex-col justify-end items-end p-3">
        <Scorecard score={score} />
      </div>
    </header>
  );
}
