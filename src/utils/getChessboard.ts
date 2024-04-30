import { initialChessboard } from "../constants/initialChessboard";
import { chessBoardType, finalObjectType } from "../types/chessTypes";
import { parseLetterToIndex } from "./parseLetter";
import { isLetter } from "./shared";

export const getLastestChessboard = (
  finalObject: finalObjectType
): chessBoardType => {
  if (
    finalObject &&
    finalObject.length > 0 &&
    finalObject[finalObject.length - 1]?.chessBoard
  ) {
    return JSON.parse(
      JSON.stringify(finalObject[finalObject.length - 1].chessBoard)
    );
  } else {
    return JSON.parse(JSON.stringify(initialChessboard));
  }
};

export const getPiecePosition = (
  notation: string,
  chessBoard: chessBoardType,
  destination: string,
  playerToMove: string
): string => {
  if (notation.length === 3) {
    return notation.slice(-2);
  }

  if (notation.length === 2) {
    const [piece, helper] = notation.split("");
    if (isLetter(helper)) {
      searchForPiece(piece, playerToMove, null, parseLetterToIndex(helper));
    } else {
      searchForPiece(piece, playerToMove, +helper - 1, null);
    }
  }

  return "xd";
};

export const searchForPiece = (
  piece: string,
  playerToMove: string,
  row: number | null,
  column: number | null
) => {
  // console.log(piece, playerToMove, row, column);
};
