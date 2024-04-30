export const possibleResults = ["0-1", "1-0", "1/2-1/2"];

export const getResult = (notation: string): [string, string] => {
  let result = notation.match(/\b\S+\b$/);

  if (!result || !possibleResults.includes(result[0])) {
    throw new Error("Notation is invalid");
  }

  return [notation.replace(result[0], ""), result[0]];
};
