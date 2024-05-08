export const parseLetterToIndex = (letter: string) => {
  return ["a", "b", "c", "d", "e", "f", "g", "h"].findIndex(
    (x) => x === letter.toLowerCase()
  );
};

export const parseLetterToPiece = (letter: string, isCaptured: Boolean) => {
  const pieceNames: { [key: string]: string[] } = {
    k: ["Król", "króla"],
    q: ["Hetman", "hetmana"],
    r: ["Wieża", "wieżę"],
    b: ["Goniec", "gońca"],
    n: ["Skoczek", "skoczka"],
    p: ["Pionek", "pionka"],
  };

  const piece = pieceNames[letter.toLowerCase()];

  if (piece) {
    return isCaptured ? piece[1] : piece[0];
  } else {
    return "Nieznana figura";
  }
};

export const parsePositionToIndex = (position: string): [number, number] => {
  const row = 8 - parseInt(position[1]);
  const column = parseLetterToIndex(position.charAt(0));

  return [row, column];
};

export const parseIndexToPosition = (row: number, column: number): string => {
  const rowIndex = 8 - row;
  const columnIndex = String.fromCharCode(97 + column);

  return columnIndex + rowIndex;
};
