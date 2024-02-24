#!/usr/bin/env node
import body from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  const firstPrimeNum = [2, 3, 5, 7, 11, 13];
  const question = Math.floor(Math.random() * 16);
  let answer = '';
  if (firstPrimeNum.indexOf(question) !== -1) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [question, answer];
};

body(rules, prime);
