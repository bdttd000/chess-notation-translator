import { initialChessboard } from "../constants/initialChessboard";
import {
  chessBoardType,
  finalObjectType,
  findPiece,
} from "../types/chessTypes";
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

export const searchForPiece = (piece: string, pieceInfo: findPiece) => {
  switch (piece.toLowerCase()) {
    case "p":
      return findPawn(pieceInfo);
    case "n":
      return findKnight(pieceInfo);
  }

  return "unknown";
};

const findPawn = (pieceInfo: findPiece): string => {
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

const findKnight = (pieceInfo: findPiece): string => {
  const [destRow, destColumn] = parsePositionToIndex(pieceInfo.destination);

  const possibleLocations = [
    [destRow + 2, destColumn + 1],
    [destRow + 2, destColumn - 1],
    [destRow - 2, destColumn + 1],
    [destRow - 2, destColumn - 1],
    [destRow + 1, destColumn + 2],
    [destRow + 1, destColumn - 2],
    [destRow - 1, destColumn + 2],
    [destRow - 1, destColumn - 2],
  ];

  for (const location of possibleLocations) {
    const [row, column] = location;
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
