function sum(a, b) {
  return a + b;
}

test('if sum is called with 4 and 5 it should return 9', () => {
  const result = sum(4, 5);

  expect(result).toBe(9);
});
