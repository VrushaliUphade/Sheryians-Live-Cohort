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




// // 8. Check if "JavaScript" contains "Sript" without using .includes().


// //9. Create an array of 5 numbers and log the sum using .reduce().
//10. Explain the difference between undefined, null, and NaN with examples.
 
////Day 22

// // 11. Write a while loop to print numbers from 10 to 1 in reverse.
// let i = 10;
// while(i>0){
//      console.log(i);
//     i--;  
// }

// // 12. Use a while loop to print multiples of 3 from 3 to 30.
// let i = 3;
// while(i<31){
//     console.log(i);
//     i+=3;   
// }

// // 13. Write a program to calculate the sum of numbers from 1 to 100 using a loop.
// let sum = 0;

// for(let i = 1; i<101; i++){
//     sum = sum + i;
// }
//     console.log(sum);


// // 14. Create a nested loop to print a star pattern.
// //que 14. slove after some topic.

// // 15. Use a for...of loop to iterate over the string "JavaScript".
//   let str = "Javascript";
//   for(let i of str){
//     console.log(i);
//   }


 ////Day 23
// //16. Remove duplicate values from an array.
// let arr = [1,1,1,3,4,5,6,6,7,8,3,5,6,9,8,2,2,2];
// let ans = [...new Set(arr)];
// console.log(ans);

// //17. Find the second largest number in an array.
//beginner
// let arr = [21,4,2,9,4,2,23];
// let ans = [...new Set(arr)];
// let newArr = ans.sort(function(a,b){
//     return b-a;
// })
// console.log(newArr[1]);
 /////adv
// let arr = [21,4,2,9,4,2,23];
//  console.log([...new Set(arr)].sort(function(a,b){
//     return b-a;
// })[1]);

// //18. Sort an array in descending order. 
// let arr = [3,2,1,8,4,5];
// let ans = arr.sort(function(a,b){
//     return b - a;
// })
// console.log(ans);

// //19. Reverse an array without using .reverse().
// let arr = [1,2,3,4,5];
// let arr2 =[]
// for(let i = arr.length-1; i>=0;i--){
//     arr2.push(arr[i]);
// }
// console.log(arr2);

// //20. Find the most frequent element in an array.
// let arr = [3,4,1,3,4,6,7];
// var obj = {};
// arr.forEach(function(val){
//     obj[val]===undefined?(obj[val]=1):[val]++;
// });

