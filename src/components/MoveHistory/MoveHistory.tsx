import React from "react";
import { finalObjectType } from "../../types/chessTypes";
import Row from "./Row";

const MoveHistory = ({
  chessMoveArray,
  activeMoveIndex,
  setMove,
}: {
  chessMoveArray: finalObjectType;
  activeMoveIndex: number | null;
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
            activeMoveIndex={activeMoveIndex}
            setMove={setMove}
          />
        );
      } else if (chessMoveArray[i]) {
        rows.push(
          <Row
            key={i}
            rowNumber={chessMoveArray[i].moveNumber}
            firstMove={chessMoveArray[i].moveInNotation}
            activeMoveIndex={activeMoveIndex}
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
