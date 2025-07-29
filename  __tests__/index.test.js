const fs = require('fs')
const path = require('path')
const reverse = require('../src/index.js')

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__' , filename)
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8')

test('reverse', () => {
  const text = readFixture('input.txt')
  const expected = readFixture('expected.txt')

  expect(reverse(text)).toEqual(expected)
});


