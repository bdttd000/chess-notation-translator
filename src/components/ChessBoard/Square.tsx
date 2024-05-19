import React from "react";
import whitePawn from "../../assets/images/wp.svg";
import whiteKnight from "../../assets/images/wn.svg";
import whiteBishop from "../../assets/images/wb.svg";
import whiteRook from "../../assets/images/wr.svg";
import whiteQueen from "../../assets/images/wq.svg";
import whiteKing from "../../assets/images/wk.svg";
import blackPawn from "../../assets/images/bp.svg";
import blackKnight from "../../assets/images/bn.svg";
import blackBishop from "../../assets/images/bb.svg";
import blackRook from "../../assets/images/br.svg";
import blackQueen from "../../assets/images/bq.svg";
import blackKing from "../../assets/images/bk.svg";

const Square = ({
  color,
  piece,
  letterLeft,
  letterRight,
}: {
  color: string;
  piece: string | null;
  letterLeft?: string | number;
  letterRight?: string | number;
}) => {
  let piecePath;

  switch (piece) {
    case "wp":
      piecePath = whitePawn;
      break;
    case "wn":
      piecePath = whiteKnight;
      break;
    case "wb":
      piecePath = whiteBishop;
      break;
    case "wr":
      piecePath = whiteRook;
      break;
    case "wq":
      piecePath = whiteQueen;
      break;
    case "wk":
      piecePath = whiteKing;
      break;
    case "bp":
      piecePath = blackPawn;
      break;
    case "bn":
      piecePath = blackKnight;
      break;
    case "bb":
      piecePath = blackBishop;
      break;
    case "br":
      piecePath = blackRook;
      break;
    case "bq":
      piecePath = blackQueen;
      break;
    case "bk":
      piecePath = blackKing;
      break;
    default:
      piecePath = null;
      break;
  }

  const negativeColor = color === "black" ? "text-[#ffce9e]" : "text-[#d18b47]";

  return (
    <span className={`square ${color} flex relative font-bold`}>
      {letterLeft ? (
        <span
          className={`w-fit h-5 absolute bottom-[2px] left-[2px] ${negativeColor}`}
        >
          {letterLeft}
        </span>
      ) : (
        ""
      )}
      {letterRight ? (
        <span
          className={`w-fit h-fit absolute top-[2px] right-[4px] ${negativeColor}`}
        >
          {letterRight}
        </span>
      ) : (
        ""
      )}
      {piecePath && <img src={piecePath} className="w-full" alt="piece" />}
    </span>
  );
};

export default Square;
