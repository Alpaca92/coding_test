"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
class G964 {
}
exports.G964 = G964;
G964.digPow = (n, p) => {
    const nPowP = [...n.toString()].reduce((prev, cur, i) => prev + ((+cur) ** (p + i)), 0);
    return Number.isInteger(nPowP / n) ? nPowP / n : -1;
};
//# sourceMappingURL=answer.js.map