import { initialChessboard } from "../../constants/initialChessboard";
import { chessBoardType, finalObjectType } from "../../types/chessTypes";

export const getChessboard = (finalObject: finalObjectType): chessBoardType => {
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
