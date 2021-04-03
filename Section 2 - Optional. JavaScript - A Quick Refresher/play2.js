const person = {
  name: 'Jorge',
  age: 29,
  greet: function() {
    console.log('Hi, I am '+ this.name);
    
  }
};

// const printName = ({ name }) => {
//   console.log(name);
// };
// printName(person);

// const { name, age } = person;
// console.log(name, age);


// const copiedPerson = {...person};
// copiedPerson.greet();
// person.greet();

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// hobbies.push('Programming');


// console.log(hobbies.map(hobby => 'Hobby:' + hobby));
// console.log(hobbies);

// for( let hobby of hobbies) {
//   console.log(hobby);
// }

// const  copiedArray = [...hobbies];
// console.log(copiedArray);


// const toArray = (...agrs) => {
//   return agrs;
// };
// console.log(toArray(1, 2, 3, 4));
