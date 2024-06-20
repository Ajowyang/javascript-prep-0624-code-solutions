let person = {
  firstName: 'Summley',
  lastName: 'Phung',
  hobby: 'basketball',
};

let fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);

person.job = 'Motion Designer';
console.log("The person's current job is: ", person.job);

person.previousJob = 'Photographer';
console.log("The person's previous job is: ", person.previousJob);

console.log('The complete person object: ', person);
