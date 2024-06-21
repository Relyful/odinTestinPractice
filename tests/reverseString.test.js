import reverseString from "../js/reverseString";

test('Reverses word "Apple"', () => {
  expect(reverseString('Apple')).toBe('elppA');
});

test('Reverses sentence', () => {
  expect(reverseString('This is a test sentence.')).toBe('.ecnetnes tset a si sihT');
});