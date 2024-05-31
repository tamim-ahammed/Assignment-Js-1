// 1. Create a variable called carName, assign the value Volvo to it. //

let carName= "Volvo"; 


// 2. On one single line, declare three variables with the following names and values: //

let firsName = "John", lastName = "Doe", age = 35;

console.log(firsName, lastName, age)


//  3. Use the correct assignment operator that will result in x being 50 (same as x = x * y).

x = 10;
y = 5;
x = x * y ;

console.log(x)


// 4. Use comments to describe the correct data type of the following variables:

let length = 16; // number type .
let lastName = "Johnson"; // string type .

const x = {
  firstName: "John",  
  lastName: "Doe"
};    // object type .


// 5. Execute the function named myFunction.

Execute the function named myFunction.
 
 function myFunction() {
  alert("Hello World!");
}

myFunction();

// call the function and see the output 


// 6. Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50"). //

const person = {
    name : "John",
    age : 50,
}

alert(person.name + " is " + person.age)


// 7. In index.html //


// 8. Array Related Question  //

// 1. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length)

// 2. Change the first item of Brand to "Ford".

	const Brand = ["Volvo", "Jeep", "Mercedes"]; 
    Brand(0)="ford";
    console.log(Brand)



// 9. Math Related Problems

// 1. Use the correct Math method to create a random number. //
let x = Math.random();
console.log(x);



// 2. Use the correct Math method to return the largest number of 10 and 20.//
let y = Math.max(10,20)
console.log(y)



// 3. Use the correct Math method to get the square root of 9. //
let a = Math.sqrt(9);
console.log(a)



// 10. comparison operator related problems! //

// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
x = 10;
y = 5;

alert(x > y)


// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough". //
var age = n;
var voteable = (age < 18) ? "Too young" : "Old enough";
alert(voteable);