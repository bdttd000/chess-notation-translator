import { chessBoardType } from "../../types/chessTypes";
import { parseLetterToIndex } from "../formatting/parseLetter";
import { isNumber } from "../formatting/shared";
import { searchForPiece } from "../pieceSearch/searchForPiece";

export const getPieceInfo = (
  notation: string,
  chessBoard: chessBoardType,
  playerToMove: string
): [string, string, string] | string => {
  if (notation === "O-O" || notation === "O-O-O") {
    return notation;
  }

  let helpers: (number | null)[] = [null, null];
  const piece = notation.charAt(0);
  const destination = notation.slice(-2);
  notation = notation.slice(1, -2);

  if (notation) {
    if (notation.length === 2) {
      [helpers[0], helpers[1]] = [
        +notation.charAt(0) - 1,
        parseLetterToIndex(notation.charAt(1)),
      ];
    } else {
      isNumber(notation.charAt(0))
        ? (helpers[0] = +notation.charAt(0) - 1)
        : (helpers[1] = parseLetterToIndex(notation.charAt(0)));
    }
  }

  const pieceInfo = {
    destination,
    playerToMove,
    helpers,
    chessBoard,
  };
  const piecePosition = searchForPiece(piece, pieceInfo);

  return [piece, piecePosition, destination];
};
