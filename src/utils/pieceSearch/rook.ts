import { findPiece } from "../../types/chessTypes";
import {
  parseIndexToPosition,
  parsePositionToIndex,
} from "../formatting/parseLetter";
import { getRookMoves } from "../helpers/getRookMoves";

export const findRook = (pieceInfo: findPiece): string => {
  const [destRow, destColumn] = parsePositionToIndex(pieceInfo.destination);
  const possibleRookMoves = getRookMoves(destRow, destColumn);

  for (const [row, column] of possibleRookMoves) {
    if (
      (pieceInfo.helpers[0] === null || pieceInfo.helpers[0] === row) &&
      (pieceInfo.helpers[1] === null || pieceInfo.helpers[1] === column) &&
      pieceInfo.chessBoard[row][column] === pieceInfo.playerToMove + "r"
    ) {
      return parseIndexToPosition(row, column);
    }
  }

  return "unknown";
};
