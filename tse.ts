/* 9-11-23 JS Intermediate Concepts
Exercise #2
Objective: Delve into Object-Oriented Programming by creating and interacting with classes.

Instructions:

Define a Person class with properties name and age.
Add a method greet() to this class which outputs a greeting.
Instantiate two different Person objects and invoke their greet methods.
Exercise #3
Objective: Understand the role of constructor methods within classes.

Instructions:

Modify your Person class. The constructor should now accept and initialize name and age properties.
Create two different Person instances with unique names and ages. */

function greet {
    greeting: string;
    constructor (message: string) {
        this.greeting = message;
    }
    greet() : string {
        return "Hello, " + this.greeting;
    }
} 

class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public greet() {
        return `Hello, I am ${this.name} and I am ${this.age}`;
    }
}

const user1 = new Person('Tom');
const user2 = new Person("Betty");
console.log(user1.greet());
console.log(user2.greet());

// JS essential concepts - exercise 2

var testNumber: number = multiply(5, 8);
console.log(`The product of these numbers is ${testNumber}`);

function multiply(number1: number, number2: number) {
    var product: number = number1 * number2;
    return product;
}

// JS foundations part 2 exercise 2 using generics

function sayThing<type>(thing: type, thing2: type): string {
    let statement: type = thing;
    let statement2 = type = thing2;
    return `${thing}` and `${thing2}`;
}

let statement = sayThing<string>("hello", "world");
let statement2 = sayThing<number>(1, 45);
console.log(statement);
console.log(statement2);