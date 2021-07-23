const countingValleys = require('../src/countingValleys.js');
test('UDDDUDUU = 1', () => {
  expect(countingValleys('UDDDUDUU')).toBe(1);
});

test('DDUUUUDD = 1', () => {
  expect(countingValleys('DDUUUUDD')).toBe(1);
});

test('DDUUDDUDUUUD = 2', () => {
  expect(countingValleys('DDUUDDUDUUUD')).toBe(2);
});

test('DUDDDUUDUU = 2', () => {
  expect(countingValleys('DUDDDUUDUU')).toBe(2);
});

test('DDUUUDDDUUUDDDUUUDDU = 4', () => {
  expect(countingValleys('DDUUUDDDUUUDDDUUUDDU')).toBe(4);
});