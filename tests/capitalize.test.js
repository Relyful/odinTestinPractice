import capitalize from "../js/capitalize"

test('capitalizes first character', () =>{
  expect(capitalize('this is a test sentence.')).toBe('This is a test sentence.');
});

test('capitalizes first character of different word', () => {
  expect(capitalize('capitalize')).toBe('Capitalize');
});