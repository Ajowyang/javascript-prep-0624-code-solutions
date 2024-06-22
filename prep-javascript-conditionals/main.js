/* Your JS goes in this file */
function isAdult(age) {
  return age >= 18;
}
let isAdultResult = isAdult(29);
console.log(isAdultResult); //true
isAdultResult = isAdult(10);
console.log(isAdultResult); //false
isAdultResult = isAdult(18);
console.log(isAdultResult); //true

function didStudentPass(score) {
  return score >= 70;
}
let didStudentPassResult = didStudentPass(70);
console.log(didStudentPassResult); //true
didStudentPassResult = didStudentPass(90);
console.log(didStudentPassResult); //true
didStudentPassResult = didStudentPass(3);
console.log(didStudentPassResult); //false

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else if (score > 100) {
    return 'A++';
  }
}
let gradeCalculatorResult = gradeCalculator(59);
console.log(gradeCalculatorResult); //F
gradeCalculatorResult = gradeCalculator(66);
console.log(gradeCalculatorResult); //D
gradeCalculatorResult = gradeCalculator(78);
console.log(gradeCalculatorResult); //C
gradeCalculatorResult = gradeCalculator(87);
console.log(gradeCalculatorResult); //B
gradeCalculatorResult = gradeCalculator(99);
console.log(gradeCalculatorResult); //A
gradeCalculatorResult = gradeCalculator(110);
console.log(gradeCalculatorResult); //A++
gradeCalculatorResult = gradeCalculator(100);
console.log(gradeCalculatorResult); //undefined

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else {
    return 'please enter a valid season';
  }
}

let seasonMessengerResult = seasonMessenger('summer');
console.log(seasonMessengerResult); //it is hot today
seasonMessengerResult = seasonMessenger('spring');
console.log(seasonMessengerResult); //the flowers are blooming
seasonMessengerResult = seasonMessenger('autumn');
console.log(seasonMessengerResult); //the leaves are changing colors
seasonMessengerResult = seasonMessenger('winter');
console.log(seasonMessengerResult); //it is cold today
seasonMessengerResult = seasonMessenger('egg');
console.log(seasonMessengerResult);
//please enter a valid season'

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend';
  } else {
    return 'It is a weekday!';
  }
}

let dayDetectorResult = dayDetector('sunday');
console.log(dayDetectorResult); //have a good weekend
dayDetectorResult = dayDetector('saturday');
console.log(dayDetectorResult); //have a good weekend
dayDetectorResult = dayDetector('wednesday');
console.log(dayDetectorResult); //It is a weekday!
dayDetectorResult = dayDetector(3);
console.log(dayDetectorResult); //It is a weekday!
