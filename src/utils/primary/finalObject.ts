import { chessMoveType, finalObjectType } from "../../types/chessTypes";
import { getChessboard } from "../chessboard/getChessboard";
import { extractNotationAndResult } from "../formatting/extractNotationAndResult";
import { getNotification } from "./getNotification";
import { modifyNotationAndChessboard } from "./modifyNotationAndChessboard";

export const getFinalObject = (
  userInput: string
): [finalObjectType, string] => {
  const finalObject: finalObjectType = [];
  const [notation, result] = extractNotationAndResult(userInput);
  const arrayOfMoves = notation.split(/\b\d+\.\s*/).filter(Boolean);
  arrayOfMoves.map((move, index) =>
    createFinalObject(move, index, finalObject)
  );
  return [finalObject, result];
};

export const createFinalObject = (
  notation: string,
  index: number,
  finalObject: finalObjectType
): void => {
  let playerColor = "w";
  notation
    .trim()
    .split(" ")
    .forEach((move) => {
      const chessBoard = getChessboard(finalObject);
      const notationObject = modifyNotationAndChessboard(
        move,
        chessBoard,
        playerColor
      );

      const chessMove: chessMoveType = {
        moveNumber: index + 1,
        notification:
          getNotification(notationObject) +
          (index * 2 + (playerColor === "w" ? 0 : 1)),
        chessBoard: chessBoard,
        moveInNotation: move,
      };
      finalObject.push(chessMove);
      playerColor = "b";
    });
};
