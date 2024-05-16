import "./App.css";
import React, { useEffect, useState } from "react";
import { getFinalObject } from "./utils/primary/finalObject";
import { chessMoveType, finalObjectType } from "./types/chessTypes";
import ChessBoard from "./components/ChessBoard/ChessBoard";
import MoveHistory from "./components/MoveHistory/MoveHistory";
import { initialChessboard } from "./constants/initialChessboard";

// let userInput =
//   "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 Re8 13. Nf1 Bf8 14. Ng3 g6 15. Bg5 h6 16. Bd2 exd4 17. cxd4 c5 18. d5 Nb6 19. Ba5 Nfd7 20. b3 Bg7 21. Rc1 Qf6 22. Rb1 b4 23. Ne2 Qe7 24. a3 bxa3 25. Bc3 f5 26. Bxg7 Qxg7 27. Nf4 fxe4 28. Nh4 g5 29. Ne6 Qf6 30. Qg4 Nxd5 31. Nxg5 hxg5 32. Qxd7 Nb4 33. Qxb7 Nxc2 34. Rxe4 a2 35. Rf1 Nb4 36. Rg4 a1=Q 37. Rxa1 Qxa1+ 38. Kh2 Qg7 39. Qf3 Qe5+ 40. g3 Rf8 41. Qg2 Qf6 42. f4 Ra7 43. Rxg5+ Rg7 44. Rh5 Qe6 45. g4 Rxf4 0-1";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [chessMoveArray, setChessMoveArray] = useState<finalObjectType>([]);
  const [chessMove, setChessMove] = useState<chessMoveType>();
  const [activeMoveIndex, setActiveMoveIndex] = useState<number>(0);
  const [result, setResult] = useState<null | string>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setMove(0);
    destructFinalObject(inputValue);
  };

  const destructFinalObject = (arg: string) => {
    const [tempObject, tempResult] = getFinalObject(arg);
    setChessMoveArray(tempObject);
    setChessMove(chessMoveArray[activeMoveIndex]);
    setResult(tempResult);
  };

  const setMove = (move: number) => {
    setActiveMoveIndex((prevIndex) => {
      if (move >= 0 && move < chessMoveArray.length) {
        setChessMove(chessMoveArray[move]);
        setActiveMoveIndex(move);
        return move;
      }
      return prevIndex;
    });
  };

  useEffect(() => {
    setChessMove(chessMoveArray[activeMoveIndex]);
  }, [chessMoveArray, activeMoveIndex]);

  useEffect(() => {
    setChessMove({
      moveNumber: 1,
      notification: "Wprowadź notację aby otrzymać informację o ruchu",
      chessBoard: initialChessboard,
      moveInNotation: "",
    });
  }, []);

  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-zinc-900 flex justify-center items-center">
      <div className="flex flex-col w-1/4 mr-8">
        <textarea
          className="border-[6px] border-zinc-700 bg-zinc-400 outline-none p-2 text-xl placeholder:text-zinc-600"
          rows={12}
          value={inputValue}
          onChange={handleChange}
          placeholder="Wprowadź notację szachową"
        />
        <button
          className="w-full border-[6px] border-zinc-700 bg-zinc-400 my-3 p-2 py-4 text-xl hover:bg-slate-400 bg-transition"
          onClick={handleButtonClick}
        >
          Generuj szachownicę
        </button>
        <div className="w-full border-[6px] border-zinc-700 bg-zinc-400 p-2 text-xl hover:bg-slate-400 bg-transition h-56 flex justify-center items-center text-center">
          {chessMove
            ? activeMoveIndex === chessMoveArray.length - 1
              ? chessMove.notification + " " + result
              : chessMove.notification
            : "Wprowadź notację aby otrzymać informację o ruchu"}
        </div>
      </div>
      <div className="flex w-fit main-border border-zinc-700 h-fit">
        {chessMove ? <ChessBoard chessBoard={chessMove.chessBoard} /> : ""}
        {chessMoveArray ? (
          <MoveHistory
            chessMoveArray={chessMoveArray}
            activeMoveIndex={activeMoveIndex}
            lastIndex={chessMoveArray.length - 1}
            setMove={setMove}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
