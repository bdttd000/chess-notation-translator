import { initialChessboard } from "../constants/initialChessboard";
import { chessBoardType, finalObjectType } from "../types/chessTypes";
import {
  parseIndexToPosition,
  parseLetterToIndex,
  parsePositionToIndex,
} from "./parseLetter";
import { isNumber } from "./shared";

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

export const getPieceInfo = (
  notation: string,
  chessBoard: chessBoardType,
  playerToMove: string
) => {
  if (notation === "O-O" || notation === "O-O-O") {
    // return false;
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

  return searchForPiece(piece, destination, playerToMove, helpers, chessBoard);
};

export const searchForPiece = (
  piece: string,
  destination: string,
  playerToMove: string,
  helpers: (number | null)[],
  chessBoard: chessBoardType
) => {
  console.log(piece, destination, playerToMove, helpers[0], helpers[1]);
  if (piece.toLowerCase() === "p") {
    return findPawn(destination, playerToMove, helpers, chessBoard);
  }
};

export const findPawn = (
  destination: string,
  playerToMove: string,
  helpers: (number | null)[],
  chessBoard: chessBoardType
): string => {
  console.log(destination);

  const [row, column] = parsePositionToIndex(destination);

  console.log(row, column);

  const orientation = playerToMove === "w" ? 1 : -1;
  if (helpers[1] === null) {
    if (chessBoard[row + orientation][column] === playerToMove + "p") {
      return parseIndexToPosition(row + orientation, column);
    }
  } else {
  }

  // console.log(chessBoard[row][column]);
  return "unknown";
};
