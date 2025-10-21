// Exercise 1 
const gretter = (myArray, counter) => {
  const greetText = 'Hello ';

  for (const name of myArray) {
    console.log(`${greetText}${name}`);
  }
};
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


// Exercise 2
const capitaliza = (str) => {
  const [first, ...rest] = str;  
  return first.toUpperCase() + rest.join('');
};
console.log(capitaliza('fooBar')); 
console.log(capitaliza('nodeJs')); 


// Exercise 3
const capitalize = (str) => {
  const [first, ...rest] = str;
  return first.toUpperCase() + rest.join('');
};
const colors = ['red', 'green', 'blue'];
const CapitalizedColor = colors.map(color => capitalize(color));
console.log(CapitalizedColor);


// Exercise 4
var values = [1, 60, 34, 30, 20, 5];
function filterLessThan20(arr) {
  return arr.filter(function(value) {
    return value >= 20;
  });
}
console.log(filterLessThan20(values));


// Exercise 5
var array = [1, 2, 3, 4];
var calculateSum = array.reduce(function(acc, curr) {
  return acc + curr;
}, 0);
var calculateProduct = array.reduce(function(acc, curr) {
  return acc * curr;
}, 1);
console.log(calculateSum);
console.log(calculateProduct);


// Exercise 6
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  details() {
    return `Model: ${this.model}, Year: ${this.year}`;
  }
}
class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year); 
    this.balance = balance;
  }
  info() {
    return `${this.details()}, Balance: $${this.balance}`;
  }
}
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());  
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());