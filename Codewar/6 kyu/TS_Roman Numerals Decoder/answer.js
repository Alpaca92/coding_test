"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
function solution(roman) {
    const symbol = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const romanArr = [...roman];
    const result = romanArr.reduce((prev, cur, i, origin) => {
        if (symbol[cur] >= (symbol[origin[i + 1]] || 0))
            return prev + (+symbol[cur]);
        return prev - (+symbol[cur]);
    }, 0);
    return result;
}
exports.solution = solution;
//# sourceMappingURL=answer.js.map