import { findPiece } from "../../types/chessTypes";
import {
  parseIndexToPosition,
  parsePositionToIndex,
} from "../formatting/parseLetter";
import { getRookMoves } from "../helpers/getRookMoves";

export const findRook = (pieceInfo: findPiece): string => {
  const [destRow, destColumn] = parsePositionToIndex(pieceInfo.destination);
  const possibleRookMoves = getRookMoves(destRow, destColumn);
  const { chessBoard, playerToMove, helpers } = pieceInfo;

  outerLoop: for (const possibleLine of possibleRookMoves) {
    for (const [row, column] of possibleLine) {
      const piece = chessBoard[row][column];

      if (piece !== playerToMove + "r" && piece !== null) {
        continue outerLoop;
      }
      if (
        (helpers[0] === null || helpers[0] === row) &&
        (helpers[1] === null || helpers[1] === column) &&
        chessBoard[row][column] === playerToMove + "r"
      ) {
        return parseIndexToPosition(row, column);
      }
    }
  }

  return "unknown";
};
