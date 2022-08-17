const stringLength = (string) => {
  if (string.length > 10) {
    throw new Error('String is too long');
  }
  else if (string.length === 0) {
    throw new Error('String is too short');
  }
  else {
    return string.length;
  }
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  devide(a, b) {
    if (b === 0) {
      throw new Error('Cannot devide by zero');
    }
    return a / b;
  }
  multiply(a, b) {
    return a * b;
  }
};

const capitalizeString = (string) => {
  return (string.charAt(0).toUpperCase() + string.slice(1));
};

module.exports = { stringLength, reverseString, Calculator, capitalizeString };