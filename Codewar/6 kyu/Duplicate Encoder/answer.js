"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateEncode = void 0;
function isDuplicated(chars, targetChar) {
    return chars.filter((char) => char === targetChar).length > 1;
}
function duplicateEncode(word, i = 0) {
    const chars = [...word];
    if (chars.every((char, _, origin) => {
        isDuplicated(origin, char);
    }))
        ;
}
exports.duplicateEncode = duplicateEncode;
//# sourceMappingURL=answer.js.map