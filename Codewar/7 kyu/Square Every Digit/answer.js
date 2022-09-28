"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static squareDigits(num) {
        const digits = num.toString().split('');
        const sqrtDigits = digits.map((digit) => Math.pow(+digit, 2).toString());
        return Number(sqrtDigits.join(''));
    }
}
exports.Kata = Kata;
//# sourceMappingURL=answer.js.map