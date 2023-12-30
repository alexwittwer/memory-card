export default function GameOver({ resetCount, resetGame, count, maxScore }) {
  return (
    <section className="gameover text-xl bg-slate-100 text-slate-900 p-5">
      <div className="p-5 bg-red-50 text-slate-900 flex gap-3 flex-col items-center justify-center">
        {count === maxScore ? <div>You Win! </div> : <div>You lost...</div>}
        <button
          onClick={() => {
            resetCount();
            resetGame();
          }}
          className="gameover-button block border-2 rounded-md bg-red-800 text-red-50 p-1"
        >
          Play Again?
        </button>
      </div>
    </section>
  );
}
