import { possibleResults } from "../../constants/shared";

export const extractNotationAndResult = (
  notation: string
): [string, string] => {
  let result = notation.match(/\b\S+\b$/);

  if (result && possibleResults.includes(result[0])) {
    switch (result[0]) {
      case "1-0":
        return [
          notation.replace(result[0], ""),
          "Koniec partii - wygrana białych!",
        ];
      case "0-1":
        return [
          notation.replace(result[0], ""),
          "Koniec partii - wygrana czarnych!",
        ];
      case "1/2-1/2":
        return [notation.replace(result[0], ""), "Koniec partii - remis!"];
      default:
        return [
          notation.replace(result[0], ""),
          "Koniec partii - nieznany wynik.",
        ];
    }
  } else {
    return [notation, "Partia niedokończona."];
  }
};
