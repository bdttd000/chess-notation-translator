import { chessBoardType, finalNotation } from "../../types/chessTypes";
import { parsePositionToIndex } from "../formatting/parseLetter";
import { makeCastling } from "./makeCastling";

export const makeMove = (
  finalNotation: finalNotation,
  chessBoard: chessBoardType,
  playerToMove: string
): void | string => {
  try {
    if (finalNotation.castling && finalNotation.castlingNotation) {
      makeCastling(finalNotation.castlingNotation, chessBoard, playerToMove);
    }

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

        if (
          chessBoard[secondPiecePosition[0]][secondPiecePosition[1]] !== null
        ) {
          finalNotation.secondPiece =
            chessBoard[secondPiecePosition[0]][secondPiecePosition[1]]?.charAt(
              1
            );
          chessBoard[secondPiecePosition[0]][secondPiecePosition[1]] = null;
        } else {
          throw new Error("Wrong notation or unexpected error occured");
        }
      }

      const pieceToMove = chessBoard[firstPosition[0]][firstPosition[1]];
      const expectedPiece =
        playerToMove + finalNotation.firstPiece.toLowerCase();

      if (pieceToMove === expectedPiece) {
        if (finalNotation.promotion) {
          chessBoard[secondPosition[0]][secondPosition[1]] =
            playerToMove + finalNotation.promotionPiece?.toLowerCase();
        } else {
          chessBoard[secondPosition[0]][secondPosition[1]] = pieceToMove;
        }
        chessBoard[firstPosition[0]][firstPosition[1]] = null;
      }
    }
  } catch (e) {
    return "blad";
  }
};
