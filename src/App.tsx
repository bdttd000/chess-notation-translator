import "./App.css";
import React, { useEffect, useState } from "react";
import { getFinalObject } from "./utils/primary/finalObject";
import { chessMoveType, finalObjectType } from "./types/chessTypes";
import ChessBoard from "./components/ChessBoard/ChessBoard";
import MoveHistory from "./components/MoveHistory/MoveHistory";
import { initialChessboard } from "./constants/initialChessboard";
import { notationExamples } from "./constants/notationExamples";
import Example from "./components/NotationExamples/Example";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [chessMoveArray, setChessMoveArray] = useState<finalObjectType>([]);
  const [chessMove, setChessMove] = useState<chessMoveType>();
  const [activeMoveIndex, setActiveMoveIndex] = useState<number>(0);
  const [result, setResult] = useState<null | string>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setMove(0);
    destructFinalObject(inputValue);
  };

  const destructFinalObject = (arg: string) => {
    let result = getFinalObject(arg);
    if (typeof result === "string") {
      setErrorMessage(result);
      setChessMoveArray([]);
    } else {
      const [tempObject, tempResult] = result;
      setErrorMessage(null);
      setChessMoveArray(tempObject);
      setChessMove(chessMoveArray[activeMoveIndex]);
      setResult(tempResult);
    }
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
          className="border-[6px] border-zinc-700 bg-zinc-400 outline-none p-2 text-xl placeholder:text-zinc-600 hover:border-[#7f5329] focus:border-[#7f5329] transition-all resize-none"
          rows={12}
          value={inputValue}
          onChange={handleChange}
          placeholder="Wprowadź notację szachową"
        />
        <button
          className="w-full border-[6px] border-zinc-700 bg-zinc-400 my-3 p-2 py-4 text-xl hover:bg-[#7f5329] transition-all"
          onClick={handleButtonClick}
        >
          Generuj szachownicę
        </button>
        <div className="w-full border-[6px] border-zinc-700 bg-zinc-400 p-2 my-[33px] text-xl h-40 flex justify-center items-center text-center flex-col gap-2 hover:border-[#7f5329] focus:border-[#7f5329] transition-all">
          {errorMessage ? (
            <span key="error" className="text-red-600">
              {errorMessage}
            </span>
          ) : chessMove ? (
            activeMoveIndex === chessMoveArray.length - 1 ? (
              <>
                <span key="notification">{chessMove.notification}</span>
                <span key="result">{result}</span>
              </>
            ) : (
              <span key="notification-only">{chessMove.notification}</span>
            )
          ) : (
            <span key="default">
              Wprowadź notację aby otrzymać informację o ruchu
            </span>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
          {notationExamples
            ? notationExamples.map((example, index) => (
                <Example
                  key={index}
                  setInputValue={setInputValue}
                  example={example}
                  index={index + 1}
                />
              ))
            : ""}
        </div>
      </div>
      <div className="flex w-fit main-border border-zinc-700 h-fit">
        {chessMove ? (
          <ChessBoard chessBoard={chessMove.chessBoard} />
        ) : (
          <ChessBoard chessBoard={initialChessboard} />
        )}
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
