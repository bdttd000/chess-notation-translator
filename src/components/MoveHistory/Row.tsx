import React from "react";

const Row = ({
  rowNumber,
  firstMove,
  secondMove,
  activeMoveIndex,
  setMove,
}: {
  rowNumber: number;
  firstMove: string;
  secondMove?: string;
  activeMoveIndex: number | null;
  setMove: (move: number) => void;
}) => {
  return (
    <div className="flex items-center text-zinc-300">
      <span className="bg-zinc-600 w-12 p-1 text-center">{rowNumber}</span>
      <span
        id={`span-${rowNumber * 2 - 2}`}
        onClick={() => setMove(rowNumber * 2 - 2)}
        className="hover:bg-slate-500 cursor-pointer w-32 p-1 px-3"
        style={{
          backgroundColor:
            activeMoveIndex === rowNumber * 2 - 2 ? "#7f5329" : "inherit",
        }}
      >
        {firstMove}
      </span>
      <span
        id={`span-${rowNumber * 2 - 1}`}
        onClick={() => setMove(rowNumber * 2 - 1)}
        className="hover:bg-slate-500 cursor-pointer w-32 p-1 px-3"
        style={{
          backgroundColor:
            activeMoveIndex === rowNumber * 2 - 1 ? "#7f5329" : "inherit",
        }}
      >
        {secondMove ?? ""}
      </span>
    </div>
  );
};

export default Row;
