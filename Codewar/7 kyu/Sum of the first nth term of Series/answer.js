"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeriesSum = void 0;
function SeriesSum(n) {
    let result = 0;
    for (let i = 1; i <= ((3 * n) - 2);) {
        result += (1 / i);
        i += 3;
    }
    return result.toFixed(2);
}
exports.SeriesSum = SeriesSum;
/*
examples

<case 1>
n = 1

result = "1.00"

<case 2>
n = 2

result = "1.25"

<case 3>
n = 3

result = "1.39"

<case 4>
n = 4

result = "1.49"
*/ 
//# sourceMappingURL=answer.js.map