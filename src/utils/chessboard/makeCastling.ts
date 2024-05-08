import { chessBoardType } from "../../types/chessTypes";

export const makeCastling = (
  castlingNotation: string,
  chessBoard: chessBoardType,
  playerToMove: string
): void => {
  const row = playerToMove === "w" ? 7 : 0;

  if (castlingNotation === "O-O") {
    chessBoard[row][4] = null;
    chessBoard[row][7] = null;
    chessBoard[row][6] = playerToMove + "k";
    chessBoard[row][5] = playerToMove + "r";
  } else if (castlingNotation === "O-O-O") {
    chessBoard[row][4] = null;
    chessBoard[row][0] = null;
    chessBoard[row][2] = playerToMove + "k";
    chessBoard[row][3] = playerToMove + "r";
  } else {
    throw new Error("Unknown castling");
  }
};
