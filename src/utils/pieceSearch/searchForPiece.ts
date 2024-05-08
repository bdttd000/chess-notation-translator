import { findPiece } from "../../types/chessTypes";
import { findBishop } from "./bishop";
import { findKing } from "./king";
import { findKnight } from "./knight";
import { findPawn } from "./pawn";
import { findQueen } from "./queen";
import { findRook } from "./rook";

export const searchForPiece = (piece: string, pieceInfo: findPiece) => {
  switch (piece.toLowerCase()) {
    case "p":
      return findPawn(pieceInfo);
    case "n":
      return findKnight(pieceInfo);
    case "b":
      return findBishop(pieceInfo);
    case "r":
      return findRook(pieceInfo);
    case "q":
      return findQueen(pieceInfo);
    case "k":
      return findKing(pieceInfo);
  }

  return "unknown";
};
