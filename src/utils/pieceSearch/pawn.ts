import { findPiece } from "../../types/chessTypes";
import {
  parseIndexToPosition,
  parsePositionToIndex,
} from "../formatting/parseLetter";

export const findPawn = (pieceInfo: findPiece): string => {
  const [row, column] = parsePositionToIndex(pieceInfo.destination);

  const orientation = pieceInfo.playerToMove === "w" ? 1 : -1;
  if (pieceInfo.helpers[1] === null) {
    if (
      pieceInfo.chessBoard[row + orientation][column] ===
      pieceInfo.playerToMove + "p"
    ) {
      return parseIndexToPosition(row + orientation, column);
    } else if (
      pieceInfo.chessBoard[row + orientation * 2][column] ===
      pieceInfo.playerToMove + "p"
    ) {
      return parseIndexToPosition(row + orientation * 2, column);
    }
  } else {
    if (
      pieceInfo.chessBoard[row + orientation][pieceInfo.helpers[1]] ===
      pieceInfo.playerToMove + "p"
    ) {
      return parseIndexToPosition(row + orientation, pieceInfo.helpers[1]);
    }
  }

  return "unknown";
};
