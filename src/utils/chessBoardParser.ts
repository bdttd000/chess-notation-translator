import { chessBoardType, finalNotation } from "../types/chessTypes";
import { getPieceInfo } from "./getChessboard";
import { parseLetterToPiece } from "./parseLetter";
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
    finalNotation.promotionPiece = parseLetterToPiece(promotionPiece, true);
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

  const startingPosition = getPieceInfo(notation, chessBoard, playerToMove);

  // TODO
  // figura na 1 miejscu, jak nie to pionek
  // sprawdzic ktora to moze byc i zwrocic skad dokad idzie
};
