// eslint-disable-next-line react/prop-types
export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {/* eslint-disable-next-line react/prop-types */}
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
