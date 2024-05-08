import { findPiece } from "../../types/chessTypes";
import {
  parseIndexToPosition,
  parsePositionToIndex,
} from "../formatting/parseLetter";
import { possibleKingMoves } from "../helpers/possiblePiecesMoves";

export const findKing = (pieceInfo: findPiece): string => {
  const [destRow, destColumn] = parsePositionToIndex(pieceInfo.destination);
  const possibleMoves = possibleKingMoves(destRow, destColumn);

  for (const [row, column] of possibleMoves) {
    if (
      row >= 0 &&
      row <= 7 &&
      column >= 0 &&
      column <= 7 &&
      pieceInfo.chessBoard[row][column] === pieceInfo.playerToMove + "k"
    ) {
      return parseIndexToPosition(row, column);
    }
  }

  return "unknown";
};
