

console.log( "Hello World");

// primitive type

/*
let name = 'josh';   // String
let age = 4 ;            // Number
let isApproved = false;   // Boolen
let firstName  = undefined; // Undefined
let selectedColor = null; // Null


console.log( name) */


// Object

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 1;
// console.log (selectedColors.length);


//Function

//Type of Functions
//Performing a task
/*
function greet(name , lastName) {

    console.log('Hello Mr.' + name + ' ' + lastName);
}

greet ('john', 'smeith'); */

//Calculating a value

// function square(Number) {
//     Number * Number;
// }
// greet('John', 'Smith') ;


console.log("This is my first code in javascripte")


// // type of variables 

// var age = 34      
// age = 30
// console.log(age)
// let name  = 'my name is anthone'
// name = 'my name is khan and im not terurist'
// console.log(name)
// const dailog = 'Sub golmall Haye'
// console.log(dailog)

/*

DATATYPE IN JAVASCRIPTE

(1) PRIMITIVE 

i)String

const name = 'Vishwas'
const language = 'JavaScript'
const Channel = 'Codevolution'

ii)Number

const total = 0
const PI = 3.14

iii)Boolean

const isPrimaryNumber = true 
const isNewUser = false 

iv)Undefined

let result 
console.log(result)

const res= undefined

v)Null

const data = null

(2)OBJECTIVE

const person = {
    firstName :'Bruce', 
    lastName : 'Wayne' ,
    age : 33,
}

console.log(person.age)

i)Array

const oddNumbers = [1,3,5,7,9]
console.log(oddNumbers(2))
*/


/*
//OPERATORS

const isValid = false 
console.log (!isValid)

//Ternary operator 
const isEven = 10 % 2 === 0 ? false : true

const isEven = 10% 2 === 0? ' Number is even' : 'Number is odd'

console.log(isEven)


*/

/*
    CONVERSIONS
    Implicit Conversion 

    console.log(true + '4')
    console.log('Bruce' - 'Wayne')
    console.log ('5' - null)
    console.log(3 + undefined)



    Explicit conversion

    console.log(Number(null))
    console.log(parseFloat('45'))
    console.log (String(null))
    console.log (Boolean(10)) //null undefined 0 '' NaN.. value is false 

  */


    /*
    EQUALITY

    const var1 = 34
    const var2 = '34'

    console.log(var1 == var2)
    console.log (var1 === var2)

    */

    /*

    //IF , ELSE IF  , ELSE STATEMENTS
    
    const num = -4

    if (num > 0)
    {
        console.log('Number is positive')

    } else if (num < 0)
    {
        console.log ('Number is negative')
    }  else {
        console.log ('Number is zero')
    }
    
    //SWITCH STATEMENT
    
    const color = '43'
     
    switch (color) {
        case 'red':
        console.log('Color is red')
        break
        case 'Blue' :
        console.log ('Color is Blue')
        break
        case 'Green':
        console.log('Color is Green') 
        break   
    default:
        console.log('Not a valid color')
    }

    */

    /*

    //LOOPING IN PROGRAMING

    For Loop 
    
    for (initializer; condition ; final-expression){
        //code to run
    }

    for (let i =1; i <=5; i++) {
        console.log ('Iteration number' + i)
    }

    While loop 

    initializer 
    while (condition) {
        //code to run 
        final-expression
    }

     let i = 1 
     while (i <=5) {
         console.log ('Iteration number ' + i)
         i++
     }


     Do While Loop

     initializer
     do {
         //code to run
         final-expression
     }  while (condition)

     let i = 1 
     do {
         console.log('Iteration number' + i)
         i++
     } while (i<=5)

     For..of loop

     for (const item of array){
         //code to run
     }

     const numArray = [1,2,3,4,5]

     for (const num of numArray ) {
         console.log('lteration number ' + num)
     }

     */

     /*
     Function 

     function greet (username){
         console.log('Good morning ' + username)
     }

     greet('Shahzab')

     function add (a,b) {
         return a + b
     }

     const sum = add (25 ,25)
     console.log(sum)

     arrow function

     const arrowSum = (a,b) => a + b
     const addFive = (num) => num + 5

     const Sum = arrowSum (25,24)
     console.log(Sum) 
     
     */

    //  SCOPE

    //  Block scope 
    //  Function Scope
    //  Global Scope

    //  Block Scope 

    //Global Scope
    const myName = 200

    if (true) {
        const myName =" Vishwas"        
        console.log (myName)
        console.log(myName)
    }

    function testFn(){
        const myName = ' Batman'
        console.log(myName)
    }

    testFn()

    

    