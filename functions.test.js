const { stringLength, reverseString, Calculator, capitalizeString } = require('./functions.js');

describe('stringLength', () => {
  test('01', () => {
    expect(stringLength('Cucumbers')).toBe(9);
  });
  test('02', () => {
    expect(() => stringLength('Atherosclerosis')).toThrow('String is too long');
  });
  test('03', () => {
    expect(() => stringLength('')).toThrow('String is too short');
  });
});

test('checkReverse', () => {
  expect(reverseString('Cucumbers')).toBe('srebmucuC');
});

const calculator = new Calculator();
describe('calculations', () => {
  describe('add', () => {
    test('01', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });
    test('02', () => {
      expect(calculator.add(164, 302)).toBe(466);
    });
    test('03', () => {
      expect(calculator.add(1072, 2684)).toBe(3756);
    });
  });
  describe('subtract', () => {
    test('01', () => {
      expect(calculator.subtract(10, 2)).toBe(8);
    });
    test('02', () => {
      expect(calculator.subtract(302, 164)).toBe(138);
    });
    test('03', () => {
      expect(calculator.subtract(10722, 2684)).toBe(8038);
    });
  });
  describe('devide', () => {
    test('01', () => {
      expect(calculator.devide(-10, -2)).toBe(5);
    });
    test('02', () => {
      expect(() => calculator.devide(302, 0)).toThrow('Cannot devide by zero');
    });
    test('03', () => {
      expect(calculator.devide(60723, 2384)).toBeCloseTo(25.47);
    });
  });
  describe('multiply', () => {
    test('01', () => {
      expect(calculator.multiply(15, 2)).toBe(30);
    });
    test('02', () => {
      expect(calculator.multiply(305, -164)).toBe(-50020);
    });
    test('03', () => {
      expect(calculator.multiply(10722, 26804)).toBe(287392488);
    });
  });
});

test('capitalizeString', () => {
  expect(capitalizeString('cucumbers')).toBe('Cucumbers');
});