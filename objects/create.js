/**
 * How to create an object 
Literal - {}
constructor
Object.Create(<prototype>)

Name Age etc are all properties
 */

//1. Literal
let obj = {
  name: "Rob",
  age: 45,
  isMarried: true,
  "Male/Female": "Male",
};
console.log(obj);
console.log(obj.name);
console.log(obj["Male/Female"]);

//2. constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
  return `Name is ${this.name} and age is ${this.age}`;
}
let obj2 = new Person("Bob", 32);
console.log(obj2);
console.log(obj2.name);

//3. Object.create
let obj3 = Object.create(obj);
console.log(Object.getPrototypeOf(obj3));

console.log(obj3);
console.log(obj3.name);
