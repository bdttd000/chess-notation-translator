import { directionsBishop } from "../../constants/shared";

export const getBishopMoves = (
  destRow: number,
  destColumn: number
): [number, number][] => {
  const possibleMoves: [number, number][] = [];

  for (const [row, column] of directionsBishop) {
    let newRow = destRow + row;
    let newColumn = destColumn + column;

    while (newRow >= 0 && newRow <= 7 && newColumn >= 0 && newColumn <= 7) {
      possibleMoves.push([newRow, newColumn]);

      newRow += row;
      newColumn += column;
    }
  }

  return possibleMoves;
};
