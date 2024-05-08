import { directionsRook } from "../../constants/shared";

export const getRookMoves = (
  destRow: number,
  destColumn: number
): [number, number][][] => {
  const possibleMoves: [number, number][][] = [];

  for (const [row, column] of directionsRook) {
    let newRow = destRow + row;
    let newColumn = destColumn + column;
    let newLine: [number, number][] = [];

    while (newRow >= 0 && newRow <= 7 && newColumn >= 0 && newColumn <= 7) {
      newLine.push([newRow, newColumn]);

      newRow += row;
      newColumn += column;
    }

    possibleMoves.push(newLine);
  }

  return possibleMoves;
};
