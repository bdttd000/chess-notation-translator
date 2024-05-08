export const isUpperCase = (letter: string): Boolean => {
  return letter === letter.toUpperCase();
};

export function isLetter(char: string): Boolean {
  return /[a-z]/.test(char);
}

export function isUppercaseLetter(char: string): Boolean {
  return /[A-Z]/.test(char);
}

export function isNumber(char: string): Boolean {
  return /[0-9]/.test(char);
}
