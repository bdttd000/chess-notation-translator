import React from "react";
import "./App.css";

const notation =
  "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 Re8 13. Nf1 Bf8 14. Ng3 g6 15. Bg5 h6 16. Bd2 exd4 17. cxd4 c5 18. d5 Nb6 19. Ba5 Nfd7 20. b3 Bg7 21. Rc1 Qf6 22. Rb1 b4 23. Ne2 Qe7 24. a3 bxa3 25. Bc3 f5 26. Bxg7 Qxg7 27. Nf4 fxe4 28. Nh4 g5 29. Ne6 Qf6 30. Qg4 Nxd5 31. Nxg5 hxg5 32. Qxd7 Nb4 33. Qxb7 Nxc2 34. Rxe4 a2 35. Rf1 Nb4 36. Rg4 a1=Q 37. Rxa1 Qxa1+ 38. Kh2 Qg7 39. Qf3 Qe5+ 40. g3 Rf8 41. Qg2 Qf6 42. f4 Ra7 43. Rxg5+ Rg7 44. Rh5 Qe6 45. g4 Rxf4 0-1";

const initialChessboard: (string | null)[][] = [
  ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
  ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
  ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
];

type chessMove = {
  moveNumber: string;
  notification: string;
  chessBoard: (null | string)[][];
  moveInNotation: string;
};

const finalObject: chessMove[] = [];
let index = 0;

console.log(arrayOfMoves);

const createFinalObject = (notation: string): void => {
  console.log(notation);
};

arrayOfMoves.map((x) => createFinalObject(x));

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
