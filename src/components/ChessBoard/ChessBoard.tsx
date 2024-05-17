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
        if (i === 7 && j === 7) {
          row.push(
            <Square
              key={j}
              color={color}
              piece={chessBoard[i][j]}
              letterLeft="H"
              letterRight="1"
            />
          );
        } else if (i === 7) {
          row.push(
            <Square
              key={j}
              color={color}
              piece={chessBoard[i][j]}
              letterLeft={String.fromCharCode(65 + j)}
            />
          );
        } else if (j === 7) {
          row.push(
            <Square
              key={j}
              color={color}
              piece={chessBoard[i][j]}
              letterRight={8 - i}
            />
          );
        } else {
          row.push(<Square key={j} color={color} piece={chessBoard[i][j]} />);
        }
      }
      board.push(
        <div key={i} className="flex">
          {row}
        </div>
      );
    }
    return board;
  };

  return <div className="h-fit">{renderBoard()}</div>;
};

export default ChessBoard;
