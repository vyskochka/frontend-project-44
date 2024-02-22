import readlineSync from 'readline-sync';
import greeting from './cli.js';

const body = (rules, task) => {
  const playerName = greeting(); // приветствиe. В саму переменную записывается return от greeting.
  console.log(rules); // правила игры
  for (let i = 0; i < 3; i += 1) {
    const game = task();
    console.log(`Question: ${game[0]}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== game[1]) {
      return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${game[1]}'.\nLet's try again, ${playerName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${playerName}!`);
};

export default body;
