import React from "react";
import { finalObjectType } from "../../types/chessTypes";
import Row from "./Row";
import leftArrow from "../../assets/images/left-arrow.svg";
import rightArrow from "../../assets/images/right-arrow.svg";
import leftDoubleArrow from "../../assets/images/left-double-arrow.svg";
import rightDoubleArrow from "../../assets/images/right-double-arrow.svg";

const MoveHistory = ({
  chessMoveArray,
  activeMoveIndex,
  lastIndex,
  setMove,
}: {
  chessMoveArray: finalObjectType;
  activeMoveIndex: number;
  lastIndex: number;
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
    <div className="bg-zinc-800 moveHistory h-fit">
      <div className="overflow-y-auto	min-w-[316px] h-[744px]">
        {renderMoveHistory()}
      </div>
      <div className="flex flex-1 moveHistory-arrows">
        <div
          className="w-1/4 h-[56px] bg-zinc-600 cursor-pointer flex justify-center items-center"
          onClick={() => setMove(0)}
        >
          <img src={leftDoubleArrow} alt="left double arrow" width={40} />
        </div>
        <div
          className="w-1/4 h-[56px] bg-zinc-600 cursor-pointer flex justify-center items-center"
          onClick={() => setMove(activeMoveIndex - 1)}
        >
          <img src={leftArrow} alt="left arrow" width={40} />
        </div>
        <div
          className="w-1/4 h-[56px] bg-zinc-600 cursor-pointer flex justify-center items-center"
          onClick={() => setMove(activeMoveIndex + 1)}
        >
          <img src={rightArrow} alt="right arrow" width={40} />
        </div>
        <div
          className="w-1/4 h-[56px] bg-zinc-600 cursor-pointer flex justify-center items-center"
          onClick={() => setMove(lastIndex)}
        >
          <img src={rightDoubleArrow} alt="right double arrow" width={40} />
        </div>
      </div>
    </div>
  );
};

export default MoveHistory;
