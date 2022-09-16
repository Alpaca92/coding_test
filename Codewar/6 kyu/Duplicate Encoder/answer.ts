function isDuplicated (chars: string[], targetChar: string): boolean {
  return chars.filter((char) => char === targetChar).length > 1;
}

export function duplicateEncode(word: string, i: number = 0): string{
  const chars: string[] = [...word];
  if (chars.every((char, _, origin) => {
    isDuplicated(origin, char)
  })
}