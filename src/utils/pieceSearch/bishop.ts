import { findPiece } from "../../types/chessTypes";
import {
  parseIndexToPosition,
  parsePositionToIndex,
} from "../formatting/parseLetter";
import { getBishopMoves } from "../helpers/getBishopMoves";

export const findBishop = (pieceInfo: findPiece): string => {
  const [destRow, destColumn] = parsePositionToIndex(pieceInfo.destination);

  const possibleBishopMoves = getBishopMoves(destRow, destColumn);

  for (const [row, column] of possibleBishopMoves) {
    if (
      (pieceInfo.helpers[0] === null || pieceInfo.helpers[0] === row) &&
      (pieceInfo.helpers[1] === null || pieceInfo.helpers[1] === column) &&
      pieceInfo.chessBoard[row][column] === pieceInfo.playerToMove + "b"
    ) {
      return parseIndexToPosition(row, column);
    }
  }

  return "unknown";
};
