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
  return (
    <div className="bg-zinc-800 overflow-y-auto	 h-[800px]">
      {renderMoveHistory()}
    </div>
  );
};

export default MoveHistory;
