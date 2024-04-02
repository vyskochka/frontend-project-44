import body from '../index.js';

const rules = 'What number is missing in the progression?';

const progression = () => {
  const arr = [];
  let a1 = Math.floor(Math.random() * 31);
  arr.push(a1);
  // начало создания прогрессии положенно
  // создаем д на которую складываем
  const d = Math.floor(Math.random() * 11);
  // заполняем еще 9 элементами
  for (let i = 0; i < 9; i += 1) {
    a1 += d;
    arr.push(a1);
  }
  // теперь нужно ебнуть случайный элемент
  const killRandom = Math.floor(Math.random() * 10);
  // взъебать короля!!!
  const deadKing = arr.splice(killRandom, 1, '..');
  // пишем ответ и вопрос
  const answer = deadKing.toString();
  const question = arr.join(' ');
  return [question, answer];
};

export default () => {
  body(rules, progression);
};
