export const isUpperCase = (letter: string): Boolean => {
  return letter === letter.toUpperCase();
};

export const isLetter = (char: string): Boolean => {
  return /[a-z]/.test(char);
};

export const isUppercaseLetter = (char: string): Boolean => {
  return /[A-Z]/.test(char);
};

export const isNumber = (char: string): Boolean => {
  return /[0-9]/.test(char);
};

export const isSequentialArray = (arr: number[]): Boolean => {
  if (arr.length === 0) return false;
  if (arr[0] !== 1) return false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return false;
    }
  }
  return true;
};
