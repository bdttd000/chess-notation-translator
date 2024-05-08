import { getBishopMoves } from "./getBishopMoves";
import { getRookMoves } from "./getRookMoves";

export const getQueenMoves = (
  destRow: number,
  destColumn: number
): [number, number][][] => {
  return [
    ...getRookMoves(destRow, destColumn),
    ...getBishopMoves(destRow, destColumn),
  ];
};
