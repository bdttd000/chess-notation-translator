import { findPiece } from "../../types/chessTypes";
import {
  parseIndexToPosition,
  parsePositionToIndex,
} from "../formatting/parseLetter";

export const findKnight = (pieceInfo: findPiece): string => {
  const [destRow, destColumn] = parsePositionToIndex(pieceInfo.destination);

  const possibleKnightMoves = [
    [destRow + 2, destColumn + 1],
    [destRow + 2, destColumn - 1],
    [destRow - 2, destColumn + 1],
    [destRow - 2, destColumn - 1],
    [destRow + 1, destColumn + 2],
    [destRow + 1, destColumn - 2],
    [destRow - 1, destColumn + 2],
    [destRow - 1, destColumn - 2],
  ];

  for (const [row, column] of possibleKnightMoves) {
    if (
      row >= 0 &&
      row <= 7 &&
      column >= 0 &&
      column <= 7 &&
      (pieceInfo.helpers[0] === null || pieceInfo.helpers[0] === row) &&
      (pieceInfo.helpers[1] === null || pieceInfo.helpers[1] === column) &&
      pieceInfo.chessBoard[row][column] === pieceInfo.playerToMove + "n"
    ) {
      return parseIndexToPosition(row, column);
    }
  }

  return "unknown";
};
