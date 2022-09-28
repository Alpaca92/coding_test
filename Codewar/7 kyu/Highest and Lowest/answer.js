"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static highAndLow(numbers) {
        const numbersArr = numbers.split(' ').map(number => +number);
        const highest = Math.max(...numbersArr);
        const lowest = Math.min(...numbersArr);
        return `${highest} ${lowest}`;
    }
}
exports.Kata = Kata;
/*
examples

<case 1>
numbers = "8 3 -5 42 -1 0 0 -9 4 7 4 -4"

result = "42 -9"

<case 2>
numbers = "1 2 3"

result = "3 1"
*/ 
//# sourceMappingURL=answer.js.map