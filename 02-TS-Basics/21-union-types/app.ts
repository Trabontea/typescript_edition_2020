
type Combinable =  number | string ;
type ConversionDescription = 'as-number' | 'as-text'


function combine(n1: Combinable, n2:number | string, resultType: ConversionDescription ) {
  let result;
  if(typeof n1 === 'number' && typeof n2 === 'number' || resultType === 'as-number' ) {
    result = +n1 + +n2
  } else {
    result = n1.toString() + n2.toString();
  }
  //!!
  return result;
}

const combinedAges =  combine(30,26, 'as-number');
console.log('combinedAges:', combinedAges);

const combinedStringAges =  combine('30', '26', 'as-number');
console.log(combinedStringAges)

const combinedNames =  combine('Max', 'Gigi', 'as-text');
console.log('combinedNames:', combinedNames);

// 22 literal type

//Alias
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!

//For example, you can simplify this code:

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }

//Simplify
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}