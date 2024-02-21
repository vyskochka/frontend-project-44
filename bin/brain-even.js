import body from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const even = () => {
  let answer = '';
  const question = Math.floor(Math.random() * 101);
  question % 2 === 0 ? answer = 'yes' : answer = 'no';
  return [question, answer];
};

body(rules, even);
