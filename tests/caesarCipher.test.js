import caesarCipher from "../js/caesarCipher";

test('Correctly ciphers string by given factor.', () => {
  expect(caesarCipher('Testicek!', 4)).toBe('Xiwxmgio!');
});

test('Correctly wraps arround to beginning of alphabet when reaching last letter.', () => {
  expect(caesarCipher('ZzZz', 1)).toBe('AaAa');
});