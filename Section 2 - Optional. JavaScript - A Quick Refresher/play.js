let name = 'Jorge';
let age = 29;
let hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' + 
    userName + 
    ', age is ' + 
    userAge + 
    ' and the user has hobbies: ' + 
    userHasHobby
  );
};

const add = (a, b) => {
  return a+b;
};


console.log(add(1, 2));

console.log(summarizeUser(name, age, hasHobbies));

