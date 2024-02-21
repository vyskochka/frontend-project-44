import greeting from "./cli.js"
const body = (rules, task) => {
    const playerName = greeting(); // приветствиe. В саму переменную записывается return от greeting.
    console.log(rules); //правила игры
    let mark = 0; //маркер для провери победы
    for (let i = 0; i < 3; i += 1) {
        let answer = ""; //ответ у нас всегда строка
        console.log(`Question: ${question1}`);
        const playerAnswer = readlineSync.question('Your answer : ');

        if (playerAnswer !== answer) {
            console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${playerName}!`);
          }
        console.log('Correct!');
    }
}