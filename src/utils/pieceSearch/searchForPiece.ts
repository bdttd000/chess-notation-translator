import { findPiece } from "../../types/chessTypes";
import { findBishop } from "./bishop";
import { findKnight } from "./knight";
import { findPawn } from "./pawn";

export const searchForPiece = (piece: string, pieceInfo: findPiece) => {
  switch (piece.toLowerCase()) {
    case "p":
      return findPawn(pieceInfo);
    case "n":
      return findKnight(pieceInfo);
    case "b":
      return findBishop(pieceInfo);
  }

  return "unknown";
};