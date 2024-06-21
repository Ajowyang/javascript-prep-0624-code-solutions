function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(2, 2);
console.log(sum); // 4

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const minutes = convertHoursToMinutes(2);
console.log(minutes); // 120

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
const greeting = getGreeting('World');
console.log(greeting); // 'Hello World!'

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const sumTimesFive = addAndMultiplyBy5(10, 5);
console.log(sumTimesFive); // 75

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const productDividedByFive = multiplyAndDivideBy5(35, 10);
console.log(productDividedByFive); // 70

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const difference = subtractTwoNumbers(22, 7);
console.log(difference); // 15;

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
const circumference = getCircleCircumference(5);
console.log(circumference); // 31.41592653589793

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Juan', 'Ramirez');
console.log(fullName); // 'Juan Ramirez';

function cube(number) {
  return number * number * number;
}
const cubed = cube(5);
console.log(cubed); // 125
