function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    n += 1;
    return n;
}

function decrement(n) {
    n -= 1;
    return n;
}

function makeInt(string) {
    string = parseInt(string, 10);
    return string;
}

function preserveDecimal(n) {
    n = parseFloat(n);
    return n;
}