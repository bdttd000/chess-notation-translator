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
    <div className="flex">
      <span className="w-8">{rowNumber}</span>
      <span
        id={`span-${rowNumber * 2 - 2}`}
        onClick={() => setMove(rowNumber * 2 - 2)}
        className="hover:bg-slate-500 cursor-pointer w-16"
        style={{
          backgroundColor:
            activeMoveIndex === rowNumber * 2 - 2 ? "red" : "inherit",
        }}
      >
        {firstMove}
      </span>
      <span
        id={`span-${rowNumber * 2 - 1}`}
        onClick={() => setMove(rowNumber * 2 - 1)}
        className="hover:bg-slate-500 cursor-pointer w-16"
        style={{
          backgroundColor:
            activeMoveIndex === rowNumber * 2 - 1 ? "red" : "inherit",
        }}
      >
        {secondMove ?? ""}
      </span>
    </div>
  );
};

export default Row;
