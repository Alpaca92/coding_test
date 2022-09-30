"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateEncode = void 0;
function duplicateEncode(word) {
    const chars = new Map();
    for (const char of word.toLowerCase()) {
        chars.set(char, (chars.get(char) || 0) + 1);
    }
    return [...word.toLowerCase()].map((char) => (chars.get(char) || 0) > 1 ? ')' : '(').join('');
}
exports.duplicateEncode = duplicateEncode;
//# sourceMappingURL=answer.js.map