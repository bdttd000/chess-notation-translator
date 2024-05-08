import { findPiece } from "../../types/chessTypes";
import {
  parseIndexToPosition,
  parsePositionToIndex,
} from "../formatting/parseLetter";
import { getQueenMoves } from "../helpers/getQueenMoves";

export const findQueen = (pieceInfo: findPiece): string => {
  const [destRow, destColumn] = parsePositionToIndex(pieceInfo.destination);
  const possibleQueenMoves = getQueenMoves(destRow, destColumn);

  for (const [row, column] of possibleQueenMoves) {
    if (
      (pieceInfo.helpers[0] === null || pieceInfo.helpers[0] === row) &&
      (pieceInfo.helpers[1] === null || pieceInfo.helpers[1] === column) &&
      pieceInfo.chessBoard[row][column] === pieceInfo.playerToMove + "q"
    ) {
      return parseIndexToPosition(row, column);
    }
  }

  return "unknown";
};
