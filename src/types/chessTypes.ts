export type chessMoveType = {
  moveNumber: number;
  notification: string;
  chessBoard: (null | string)[][];
  moveInNotation: string;
};

export type chessBoardType = (string | null)[][];

export type finalObjectType = chessMoveType[];

export type possibleResults = "0-1" | "1-0" | "1/2-1/2";

export type finalNotation = {
  firstPiece?: string;
  firstPosition?: string;
  capture?: boolean;
  secondPiece?: string;
  secondPosition?: string;
  check?: boolean;
  castling?: string;
  castlingNotation?: string;
  promotion?: boolean;
  promotionPiece?: string;
  checkMate?: boolean;
};
