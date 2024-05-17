import { finalNotation } from "../../types/chessTypes";
import { parseLetterToPiece } from "../formatting/parseLetter";

export const getNotification = (
  finalNotation: finalNotation,
  playerToMove: string
): string => {
  let returnString = "";

  if (finalNotation.castling) {
    if (finalNotation.castlingNotation === "O-O") {
      returnString += "Roszada królewska";
    } else {
      returnString += "Roszada hetmańska";
    }
    if (playerToMove === "w") {
      returnString += " po stronie białych.";
    } else {
      returnString += " po stronie czarnych.";
    }
  }

  if (finalNotation.firstPiece) {
    returnString += parseLetterToPiece(finalNotation.firstPiece, false);
    returnString += " z pola ";
    returnString += finalNotation.firstPosition;
    returnString += " idzie na pole ";
    returnString += finalNotation.secondPosition;
    if (finalNotation.capture && finalNotation.secondPiece) {
      returnString += " i zbija ";
      returnString += parseLetterToPiece(finalNotation.secondPiece, true);
    }
    if (finalNotation.promotion && finalNotation.promotionPiece) {
      returnString += " awansując na ";
      returnString += parseLetterToPiece(finalNotation.promotionPiece, true);
    }
    returnString += ".";
  }

  if (finalNotation.check) {
    returnString += " Szach!";
  }

  if (finalNotation.checkMate) {
    returnString += " Szach mat!";
  }

  return returnString;
};
