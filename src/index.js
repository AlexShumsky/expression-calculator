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
    let mainExpr = expr.split(' ').join('').split('');
    console.log(mainExpr);
    mainExpr.map((val, i) => { if (val === '*' || val === '/') mainExpr.splice(i - 1, 3, getResult(mainExpr[i - 1], mainExpr[i], mainExpr[i + 1])) });
    console.log(mainExpr);
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

module.exports = {
    expressionCalculator
}