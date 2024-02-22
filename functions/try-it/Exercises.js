console.log(makeDiamond(5));
function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}
function makeDiamond(size) {
    let diamond = '';
    for (let i = 1; i <= size; i++) {
        let spaces = ' '.repeat(size - i);
        diamond += spaces + makeLine(2 * i - 1) + '\n';
    }
    for (let i = size - 1; i >= 1; i--) {
        let spaces = ' '.repeat(size - i);
        diamond += spaces + makeLine(2 * i - 1) + '\n';
    }
    return diamond;
}
function myFunc(radius) {
    let area = Math.PI * radius**2;
    return area;
}