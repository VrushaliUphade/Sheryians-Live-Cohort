//Day 21

// Javascript Practice Questions & Solutions
// This document contains JavaScript questions with detailed solutions.
// Click on any question to reveal the answer.

//1 Console & Basic Oerations

// //1. Log "Hello, JavaScript!" to the console in 3 different ways.
//  //Way 1.
// console.log("Hello, JavaScript");
// //Way 2.
// console.warn("Hello, JavaScript!");
// //Way 3.
// console.error("Hello, JavaScript");

// //2. Perform 36*2-(10/2)+7 and log the result.
// console.log(36*2-(10/2)+7);

// //3. Lof the data type of "1234",123,true,and null using typeof.
// console.log(typeof("1234"));
// console.log(typeof(123));
// console.log(typeof(true));
// console.log(typeof(null));

// // 4. Write a program that swaps the values of two variables.
// Way 1
// let a = 12;
// let b = 13;
// let c;
// c = a;
// a = b;
// b = c;
//  console.log(a,b);
 
// // Way 2 
// let a = 12;
// let b = 13;
// [a,b] = [b,a];
// console.log(a,b);

// //5. Use console.group() to organcize logs into a group.
// console.group("Subjects");
// console.log("math");
// console.log("science");
// console.log("english");
// console.groupEnd();


// //2 Variables & Data Types

// //6. Declare a const object, modify its properties, and log the updates object.
// const obj = {
//     name : "riya",
//     age : 20,
// };
// obj.age = 30;
// console.log(obj);



// //7. Convert "50" (string) into a number using 3 different methods.
// console.log(Number("50"));
// console.log(parseInt("50"));
// console.log(+"50");

// // 8. Check if "JavaScript" contains "Sript" without using .includes().
// let str = "JavaScript";

// if(str.indexOf("Script") === -1){
//     console.log(false);   
// }
// else{
//     console.log(true);
    
// }


// //9. Create an array of 5 numbers and log the sum using .reduce().

// let Array = [1,2,3,4,5];



//10. Explain the difference between undefined, null, and NaN with examples.



 