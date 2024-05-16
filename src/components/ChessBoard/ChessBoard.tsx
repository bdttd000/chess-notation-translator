import React from "react";
import { chessBoardType } from "../../types/chessTypes";
import Square from "./Square";

const ChessBoard = ({ chessBoard }: { chessBoard: chessBoardType }) => {
  const renderBoard = () => {
    const board = [];
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        let color = (i + j) % 2 === 0 ? "white" : "black";
        row.push(<Square key={j} color={color} piece={chessBoard[i][j]} />);
      }
      board.push(
        <div key={i} className="flex">
          {row}
        </div>
      );
    }
    return board;
  };

  return <div>{renderBoard()}</div>;
};

export default ChessBoard;
