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
