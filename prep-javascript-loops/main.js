// create your loops here.
function forLoop1() {
  let arr = [];
  for (let i = 0; i <= 9; i++) {
    arr.push(i);
  }
  return arr;
}

let forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time to explosion: ' + i);
  }
}
forLoop2();

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
function forInLoop1(object) {
  let arr = [];
  for (let key in object) {
    arr.push(key);
  }
  return arr;
}

let forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  let arr = [];
  for (let key in object) {
    arr.push(object[key]);
  }
  return arr;
}
let forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
