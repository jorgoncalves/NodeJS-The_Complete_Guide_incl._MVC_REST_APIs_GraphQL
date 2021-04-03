const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log('Timer is done!');
  fetchData().then(text => {
    console.log(text);
  });
}, 2000);

const name = 'Jorge';
const age = 29;
console.log('My name is ' + name + ' and I am ' + age + ' years old.');
console.log(`My name is ${name} and I am ${age} years old.`);
