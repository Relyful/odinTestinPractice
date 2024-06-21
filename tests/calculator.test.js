import { calculator } from "../js/calculator";

test('Adds 2 numbers', () => {
  expect(calculator.add(2,2)).toBe(4);
});

test('Subtracts 2 numbers', () => {
  expect(calculator.subtract(6,2)).toBe(4);
});

test('Multiplies 2 numbers', () => {
  expect(calculator.multiply(2,2)).toBe(4);
});

test('Divides 2 numbers', () => {
  expect(calculator.divide(8,2)).toBe(4);
});