import { chessMoveType, finalObjectType } from "../../types/chessTypes";
import { getChessboard } from "../chessboard/getChessboard";
import { extractNotationAndResult } from "../formatting/extractNotationAndResult";
import { isSequentialArray } from "../formatting/shared";
import { getNotification } from "./getNotification";
import { modifyNotationAndChessboard } from "./modifyNotationAndChessboard";

export const getFinalObject = (
  userInput: string
): [finalObjectType, string] | string => {
  const finalObject: finalObjectType = [];
  const [notation, result] = extractNotationAndResult(userInput);
  if (!notation.startsWith("1. ")) {
    return "Błędna notacja!";
  }

  const getLettersWithDot = /\d+\./g;
  const matches = notation.match(getLettersWithDot);
  const numbers = matches?.map((numberWithDot) =>
    parseInt(numberWithDot.replace(".", ""))
  );
  if (!numbers || !isSequentialArray(numbers)) {
    return "Ruchy nie są uporządkowane!";
  }

  console.log(numbers);

  const arrayOfMoves = notation.split(/\b\d+\.\s*/).filter(Boolean);
  try {
    arrayOfMoves.forEach((move, index) => {
      try {
        let regex;
        regex =
          arrayOfMoves.length - 1 === index ? /^\S+( \S+)?$/ : /^\S+ \S+$/;
        if (!regex.test(move.trim())) {
          throw new Error(
            "Błędna ilość argumentów w ruchu " + (index + 1) + ". " + move
          );
        }
        createFinalObject(move, index, finalObject);
      } catch (error) {
        if (error instanceof Error && error.message !== "") {
          throw new Error(error.message as string);
        }
        throw new Error("Błąd w ruchu " + (index + 1) + ". " + move);
      }
    });

    return [finalObject, result];
  } catch (error) {
    if (error instanceof Error) {
      return error.message as string;
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const createFinalObject = (
  notation: string,
  index: number,
  finalObject: finalObjectType
): void => {
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

      const notification = getNotification(notationObject, playerColor);
      if (notification.includes("unknown")) {
        throw new Error("Ruch niemożliwy do wykonania '" + move + "'");
      }

      const chessMove: chessMoveType = {
        moveNumber: index + 1,
        notification: notification,
        chessBoard: chessBoard,
        moveInNotation: move,
      };
      finalObject.push(chessMove);
      playerColor = "b";
    });
};
