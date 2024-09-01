const output = require('./index');

test('prints Hello, Continuous Integration!', () => {
  console.log = jest.fn(); // Mock console.log
  require('./index');
  expect(console.log).toHaveBeenCalledWith('Hello, Continuous Integration!');
});
