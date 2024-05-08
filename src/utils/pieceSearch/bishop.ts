import { findPiece } from "../../types/chessTypes";
import {
  parseIndexToPosition,
  parsePositionToIndex,
} from "../formatting/parseLetter";
import { getBishopMoves } from "../helpers/getBishopMoves";

export const findBishop = (pieceInfo: findPiece): string => {
  const [destRow, destColumn] = parsePositionToIndex(pieceInfo.destination);
  const possibleBishopMoves = getBishopMoves(destRow, destColumn);
  const { chessBoard, playerToMove, helpers } = pieceInfo;

  outerLoop: for (const possibleLine of possibleBishopMoves) {
    for (const [row, column] of possibleLine) {
      const piece = chessBoard[row][column];

      if (piece !== playerToMove + "b" && piece !== null) {
        continue outerLoop;
      }
      if (
        (helpers[0] === null || helpers[0] === row) &&
        (helpers[1] === null || helpers[1] === column) &&
        chessBoard[row][column] === playerToMove + "b"
      ) {
        return parseIndexToPosition(row, column);
      }
    }
  }

  return "unknown";
};
