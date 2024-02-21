import readlineSync from 'readline-sync';


const rules = 'What is the result of the expression?';
const calc = () => {
  let number1 = 0;
  let number2 = 0;
  number1 = Math.floor(Math.random() * 101);
  number2 = Math.floor(Math.random() * 101);
   
  let answer = 0;
  if (i === 0) {
    answer = number1 + number2;
    const question = `${number1} + ${number2}`;
  } else if (i === 1) {
    answer = number1 - number2;
    const question = `${number1} - ${number2}`;
  } else if (i === 2) {
    answer = number1 * number2;
    const question = `${number1} * ${number2}`;
  }
  const playerAnswer = readlineSync.question('Your answer : ');
  if (playerAnswer !== String(answer)) {
    return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
  }
  console.log('Correct!');
  return console.log(`Congratulations, ${name}!`);
};

calc();
