import body from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const even = () => {
  let answer = '';
  const question = Math.floor(Math.random() * 101);
  switch (question % 2) {
    case 0:
      answer = 'yes';
      break;
    default:
      answer = 'no';
  }
  return [question, answer];
};

export default () => {
  body(rules, even);
};