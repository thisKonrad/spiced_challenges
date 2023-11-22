import { add, substract, multiply, divide} from "./index.js";

const sumAdd = require(add);
    test('adds 2 + 3 to equal 5', () => {
    expect(sumAdd(2, 3)).toBe(5);
});
sumAdd = require(add);
    test('adds -12 + 3 to equal -9', () => {
    expect(sumAdd(-12, 3)).toBeLessThan(-9);
});
sumAdd = require(add);
    test('adds 0.1 + 0.2 to equal 0.3', () => {
    expect(sumAdd(0.1, 0.2)).toBeCloseTo(0.3);
});


const sumSub = require(substract);
    test('substract 15 - 5 to equal 10', () => {
    expect(sumSub(15, 5)).toBe(10);
});
sumSub = require(substract);
    test('substract 12 - 92 to equal -80', () => {
    expect(sumSub(12, -92)).toBeLessThan(-80);
});


const sumMultiply = require(multiply);
    test('multiply 2 * 4 to equal 8', () => {
    expect(sumMultiply(2, 4)).toBe(8);
});
sumMultiply = require(multiply);
    test('multiply -6 * 4 to equal -24', () => {
    expect(sumMultiply(-6, 4)).toBeLessThan(-24);
});
sumMultiply = require(multiply);
    test('multiply 5 * -3 to equal -15', () => {
    expect(sumMultiply(5, -3)).toBeLessThan(-15);
});
sumMultiply = require(multiply);
    test('multiply -3 * -7 to equal 21', () => {
    expect(sumMultiply(-3, -7)).toBe(21);
});


const sumDivide = require(divide);
    test('divide 9 / 3 to equal 3', () => {
    expect(sumDivide(9, 3)).toBe(3);
});
sumDivide = require(divide);
    test('divide 9 / 0 to equal "You should not do this!"', () => {
    expect(sumDivide(9, 0)).toBe('You should not do this!');
});