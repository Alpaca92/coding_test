export function duplicateEncode(word: string){
  const chars = new Map<string, number>();
  
  for (const char of word.toLowerCase()) {
      chars.set(char, (chars.get(char) || 0) + 1);
  }

  return [...word.toLowerCase()].map((char) => (chars.get(char) || 0) > 1 ? ')' : '(').join('');
}