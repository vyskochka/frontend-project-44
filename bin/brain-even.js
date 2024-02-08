import readlineSync from 'readline-sync';

const even = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; ++i) {
    let answer = "";
    let question1 = Math.floor(Math.random() * 101);
    question1 % 2 === 0 ? answer = "yes" : answer = "no";
    console.log(`Question: ${question1}`);
    const playerAnswer = readlineSync.question('Your answer : ');
    if (playerAnswer !== answer) {
        return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return `Congratulations, ${name}`;
};

even();