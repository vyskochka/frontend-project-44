import body from '../src/index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  let a = Math.floor(Math.random() * 101);
  let b = Math.floor(Math.random() * 101);
  const question = `${a} ${b}`;
  while(a !== 0 && b !== 0){
    if(a >= b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const answer = a + b;
  return [question, answer.toString()];
}

body(rules, gcd);
