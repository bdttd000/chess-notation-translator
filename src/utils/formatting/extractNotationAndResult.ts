import { possibleResults } from "../../constants/shared";

export const extractNotationAndResult = (
  notation: string
): [string, string] => {
  let result = notation.match(/\b\S+\b$/);

  if (!result || !possibleResults.includes(result[0])) {
    return [notation, "Pratia w toku"];
  }

  return [notation.replace(result[0], ""), result[0]];
};
