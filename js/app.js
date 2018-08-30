// * Regular function expression
// const sayHello = function () {
//   console.log('Hello');
// }
// * Convert Arrow function
// const sayHello = () => {
//   console.log('Hello');
// }
// * Simplify Arrow function
// const sayHello = () => console.log('Hello');
// * Arrow function with return key word
// const sayHello = () => 'Hello';
// * Return an object literal
// const sayHello = () => ({
//   msg: 'Hello'
// });
// * Arrow function with single param
// const sayHello = name => console.log(`Hello ${name}`);
// * Arrow function with plural params
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Adel', 'Tahenti');

// ** Callback function
const users = ['Nathan', 'John', 'William'];
// ** Shorter
// const nameLengths = users.map(function (name) {
//   return name.length;
// });

// ** Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);