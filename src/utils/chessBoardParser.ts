import { chessBoardType, finalNotation } from "../types/chessTypes";
import { getPieceInfo } from "./getChessboard";
import { parsePositionToIndex } from "./parseLetter";
import { isUppercaseLetter } from "./shared";

export const chessBoardParser = (
  notation: string,
  chessBoard: chessBoardType,
  playerToMove: string
) => {
  const finalNotation: finalNotation = {};

  if (notation.includes("+")) {
    notation = notation.replace("+", "");
    finalNotation.check = true;
  }

  if (notation.includes("#")) {
    notation = notation.replace("#", "");
    finalNotation.checkMate = true;
  }

  if (notation.includes("=")) {
    const promotionPiece = notation.slice(-1);
    finalNotation.promotionPiece = promotionPiece;
    notation = notation.replace("=" + promotionPiece, "");
    finalNotation.promotion = true;
  }

  if (notation.includes("x")) {
    notation = notation.replace("x", "");
    finalNotation.capture = true;
  }

  if (!isUppercaseLetter(notation.charAt(0))) {
    notation = "P" + notation;
  }

  const moveInformation = getPieceInfo(notation, chessBoard, playerToMove);

  if (typeof moveInformation === "string") {
    finalNotation.castlingNotation = moveInformation;
  } else {
    finalNotation.firstPiece = moveInformation[0];
    finalNotation.firstPosition = moveInformation[1];
    finalNotation.secondPosition = moveInformation[2];
  }

  makeMove(finalNotation, chessBoard, playerToMove);
};

const makeMove = (
  finalNotation: finalNotation,
  chessBoard: chessBoardType,
  playerToMove: string
) => {
  if (finalNotation.secondPosition === "unknown") {
    return;
  }

  console.log(chessBoard);

  if (
    finalNotation.firstPiece &&
    finalNotation.firstPosition &&
    finalNotation.secondPosition
  ) {
    const firstPosition = parsePositionToIndex(finalNotation.firstPosition);
    const secondPosition = parsePositionToIndex(finalNotation.secondPosition);

    if (finalNotation.capture) {
      const orientation = playerToMove === "w" ? 1 : -1;
      const secondPiecePosition =
        chessBoard[secondPosition[0]][secondPosition[1]] !== null
          ? [secondPosition[0], secondPosition[1]]
          : [secondPosition[0] + orientation, secondPosition[1]];

      if (chessBoard[secondPiecePosition[0]][secondPiecePosition[1]] !== null) {
        finalNotation.secondPiece =
          chessBoard[secondPiecePosition[0]][secondPiecePosition[1]]?.charAt(1);
        chessBoard[secondPiecePosition[0]][secondPiecePosition[1]] = null;
      } else {
        throw new Error("Wrong notation or unexpected error occured");
      }
    }

    const pieceToMove = chessBoard[firstPosition[0]][firstPosition[1]];
    const expectedPiece = playerToMove + finalNotation.firstPiece.toLowerCase();

    if (pieceToMove === expectedPiece) {
      if (finalNotation.promotion) {
        chessBoard[secondPosition[0]][secondPosition[1]] =
          playerToMove + finalNotation.promotionPiece?.toLowerCase();
      } else if (finalNotation.castling) {
        // TODO
        // castling on chessBoard
      } else {
        chessBoard[secondPosition[0]][secondPosition[1]] = pieceToMove;
      }
      chessBoard[firstPosition[0]][firstPosition[1]] = null;
    }
  }
};
