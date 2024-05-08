export const possibleKingMoves = (
  row: number,
  column: number
): [number, number][] => {
  return [
    [row + 1, column],
    [row - 1, column],
    [row, column + 1],
    [row, column - 1],
    [row + 1, column + 1],
    [row + 1, column - 1],
    [row - 1, column + 1],
    [row - 1, column - 1],
  ];
};

export const possibleKnightMoves = (
  row: number,
  column: number
): [number, number][] => {
  return [
    [row + 2, column + 1],
    [row + 2, column - 1],
    [row - 2, column + 1],
    [row - 2, column - 1],
    [row + 1, column + 2],
    [row + 1, column - 2],
    [row - 1, column + 2],
    [row - 1, column - 2],
  ];
};
