import React from "react";

const Row = ({
  rowNumber,
  firstMove,
  secondMove,
  setMove,
}: {
  rowNumber: number;
  firstMove: string;
  secondMove?: string;
  setMove: (move: number) => void;
}) => {
  return (
    <div>
      <span>{rowNumber}</span>
      <span
        onClick={() => setMove(rowNumber * 2 - 2)}
        className="hover:bg-slate-500 cursor-pointer"
      >
        {firstMove}
      </span>
      <span
        onClick={() => setMove(rowNumber * 2 - 1)}
        className="hover:bg-slate-500 cursor-pointer"
      >
        {secondMove ?? ""}
      </span>
    </div>
  );
};

export default Row;
