import React from "react";
import "./App.css";
import { chessMoveType, finalObjectType } from "./types/chessTypes";
import { extractNotationAndResult } from "./utils/formatting/extractNotationAndResult";
import { modifyNotationAndChessboard } from "./utils/primary/modifyNotationAndChessboard";
import { getChessboard } from "./utils/chessboard/getChessboard";

// let userInput =
//   "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 Re8 13. Nf1 Bf8 14. Ng3 g6 15. Bg5 h6 16. Bd2 exd4 17. cxd4 c5 18. d5 Nb6 19. Ba5 Nfd7 20. b3 Bg7 21. Rc1 Qf6 22. Rb1 b4 23. Ne2 Qe7 24. a3 bxa3 25. Bc3 f5 26. Bxg7 Qxg7 27. Nf4 fxe4 28. Nh4 g5 29. Ne6 Qf6 30. Qg4 Nxd5 31. Nxg5 hxg5 32. Qxd7 Nb4 33. Qxb7 Nxc2 34. Rxe4 a2 35. Rf1 Nb4 36. Rg4 a1=Q 37. Rxa1 Qxa1+ 38. Kh2 Qg7 39. Qf3 Qe5+ 40. g3 Rf8 41. Qg2 Qf6 42. f4 Ra7 43. Rxg5+ Rg7 44. Rh5 Qe6 45. g4 Rxf4 0-1";

// // pawn test
// let userInput =
//   "1. 1. e4 d5 2. exd5 e6 3. dxe6 fxe6 4. d4 e5 5. c4 e4 6. d5 c5 7. dxc6 a6 8. cxb7 a5 9. bxa8=Q g5 10. f3 exf3 11. h3 fxg2 12. h4 gxh1=R 1/2-1/2";

// // knight test
// let userInput = "1. Nc3 Nf6 2. Nf3 Nc6 1/2-1/2";

let userInput =
  "1. Nf3 Nf6 2. Nc3 Ne4 3. d4 Nd6 4. Nd2 c5 5. Nce4 b6 6. Nc3 a6 7. Nde4 a5 8. Nd2 a4 1/2-1/2";

const finalObject: finalObjectType = [];

const [notation, result] = extractNotationAndResult(userInput);

const arrayOfMoves = notation.split(/\b\d+\.\s*/).filter(Boolean);

const createFinalObject = (notation: string, index: number): void => {
  let playerColor = "w";
  notation
    .trim()
    .split(" ")
    .forEach((move) => {
      const chessBoard = getChessboard(finalObject);
      const notationObject = modifyNotationAndChessboard(
        move,
        chessBoard,
        playerColor
      );
      const chessMove: chessMoveType = {
        moveNumber: index + 1,
        notification: "asd",
        chessBoard: chessBoard,
        moveInNotation: move,
      };
      finalObject.push(chessMove);
      playerColor = "b";
    });
};

arrayOfMoves.map((move, index) => createFinalObject(move, index));

// console.log(finalObject);

function App() {
  return (
    <div>
      {/* {finalObject
        ? finalObject.map((x) => <div>{x}</div>)
        : "no moves for now"} */}
    </div>
  );
}

export default App;
