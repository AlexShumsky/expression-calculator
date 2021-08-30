function eval() {
    // Do not use eval!!!
    return;
}/*
let a = 'c';
let expr = ['a', '+', 'b'];
let i = 1;
expr.splice(i - 1, 3, a);
console.log(expr);*/
function expressionCalculator(expr) {
    if (!isBracketCorrect(expr)) throw Error("ExpressionError: Brackets must be paired");
    let mainExpr = expr.split(' ').join('').split('');
    mainExpr.map((val, i) => { if (val === '*' || val === '/') mainExpr.splice(i - 1, 3, getResult(mainExpr[i - 1], mainExpr[i], mainExpr[i + 1])) });
    mainExpr.map((val, i) => { if (val === '+' || val === '-') mainExpr.splice(i - 1, 3, getResult(mainExpr[i - 1], mainExpr[i], mainExpr[i + 1])) });
    return +mainExpr.join('');
}
function getResult(a, n, b) {
    if (n === '/' && b == '0') throw Error("TypeError: Division by zero.");
    return (n === '*') ? +a * +b :
        (n === '/') ? +a / +b :
            (n === '+') ? +a + +b :
                (n === '-') ? +a - +b : '';
}
function isBracketCorrect(expr) {
    let left = 0;
    let right = 0;
    expr.split('').forEach(char => {
        if (char === '(') left++;
        else if (char === ')') right++;
    });
    return left === right;
}
module.exports = {
    expressionCalculator
}