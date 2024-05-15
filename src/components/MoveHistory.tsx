import React from "react";
import { chessMoveType, finalObjectType } from "../types/chessTypes";
import Row from "./Row";

const MoveHistory = ({
  chessMoveArray,
  setMove,
}: {
  chessMoveArray: finalObjectType;
  setMove: (move: number) => void;
}) => {
  const renderMoveHistory = () => {
    const rows = [];
    for (let i = 0; i < chessMoveArray.length; i += 2) {
      if (chessMoveArray[i] && chessMoveArray[i + 1]) {
        rows.push(
          <Row
            key={i}
            rowNumber={chessMoveArray[i].moveNumber}
            firstMove={chessMoveArray[i].moveInNotation}
            secondMove={chessMoveArray[i + 1].moveInNotation}
            setMove={setMove}
          />
        );
      } else if (chessMoveArray[i]) {
        rows.push(
          <Row
            key={i}
            rowNumber={chessMoveArray[i].moveNumber}
            firstMove={chessMoveArray[i].moveInNotation}
            setMove={setMove}
          />
        );
      }
    }

    return rows;
  };
  return <div>{renderMoveHistory()}</div>;
};

export default MoveHistory;
