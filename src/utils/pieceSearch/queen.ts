import { findPiece } from "../../types/chessTypes";
import {
  parseIndexToPosition,
  parsePositionToIndex,
} from "../formatting/parseLetter";
import { getQueenMoves } from "../helpers/getQueenMoves";

export const findQueen = (pieceInfo: findPiece): string => {
  const [destRow, destColumn] = parsePositionToIndex(pieceInfo.destination);
  const possibleQueenMoves = getQueenMoves(destRow, destColumn);
  const { chessBoard, playerToMove, helpers } = pieceInfo;

  outerLoop: for (const possibleLine of possibleQueenMoves) {
    for (const [row, column] of possibleLine) {
      const piece = chessBoard[row][column];

      if (piece !== playerToMove + "q" && piece !== null) {
        continue outerLoop;
      }
      if (
        (helpers[0] === null || helpers[0] === row) &&
        (helpers[1] === null || helpers[1] === column) &&
        chessBoard[row][column] === playerToMove + "q"
      ) {
        return parseIndexToPosition(row, column);
      }
    }
  }

  return "unknown";
};
