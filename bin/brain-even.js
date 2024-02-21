import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const even = () => {
//  const playerName = greeting();
//  console.log(rules);
  for (let i = 0; i < 3; ++i) {
    let answer = "";
    let question1 = Math.floor(Math.random() * 101);
    question1 % 2 === 0 ? answer = "yes" : answer = "no";
    console.log(`Question: ${question1}`);
    const playerAnswer = readlineSync.question('Your answer : ');
    if (playerAnswer !== answer) {
      return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${playerName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${playerName}!`);
};

even();