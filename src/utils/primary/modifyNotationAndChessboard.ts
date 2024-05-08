import { chessBoardType, finalNotation } from "../../types/chessTypes";
import { getPieceInfo } from "./getPieceInfo";
import { isUppercaseLetter } from "../formatting/shared";
import { makeMove } from "../chessboard/makeMove";

export const modifyNotationAndChessboard = (
  notation: string,
  chessBoard: chessBoardType,
  playerToMove: string
): finalNotation => {
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
    notation = "p" + notation;
  }

  const moveInformation = getPieceInfo(notation, chessBoard, playerToMove);

  if (typeof moveInformation === "string") {
    finalNotation.castling = true;
    finalNotation.castlingNotation = moveInformation;
  } else {
    finalNotation.firstPiece = moveInformation[0];
    finalNotation.firstPosition = moveInformation[1];
    finalNotation.secondPosition = moveInformation[2];
  }

  makeMove(finalNotation, chessBoard, playerToMove);

  return finalNotation;
};
