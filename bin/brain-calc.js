import body from '../src/index.js';

const rules = 'What is the result of the expression?';

const calc = () => {
  let question = '';
  let answer = 0;
  const i = Math.floor(Math.random() * 3);
  const number1 = Math.floor(Math.random() * 101);
  const number2 = Math.floor(Math.random() * 101);
  switch (i) {
    case 0:
      answer = number1 + number2;
      question = `${number1} + ${number2}`;
      break;
    case 1:
      answer = number1 - number2;
      question = `${number1} - ${number2}`;
      break;
    default: 
      answer = number1 * number2;
      question = `${number1} * ${number2}`;
  }
  return [question, answer.toString()];
};

body(rules, calc);
