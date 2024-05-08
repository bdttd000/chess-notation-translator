import { possibleResults } from "../constants/shared";

export const getResult = (notation: string): [string, string] => {
  let result = notation.match(/\b\S+\b$/);

  if (!result || !possibleResults.includes(result[0])) {
    throw new Error("Notation is invalid");
  }

  return [notation.replace(result[0], ""), result[0]];
};
