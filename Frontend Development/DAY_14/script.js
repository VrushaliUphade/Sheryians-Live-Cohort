// console.log("hello");
// console.warn("This is warning")
// console.error("This is error")
// var a = 20
// console.log(a);
// alert('Are you sure!')
// confirm('Are you okk')
// prompt("Enter your name")
 //


 //rest parameters
//  function abcd(a,b,c,...chacha){
//    console.log(a,b,c,chacha);
   
//  }
//  abcd(1,2,3,4,5,6);


//hoisting :- js mein variables and functions unko js declaratioon waala part top pe move kr deta hai, aur isey hu kahte hai hosisting
// console.log(a);
// var a = 10;

// //iife - immediately invoked function expression
// (function abcd(){
// console.log('Hello World');

// })();


// // hofs :- higher order functions
// // ek aisa function ko yaa to return kare fuction ya to accept kare function in parameter, ya fir dono
// function abcd(){
//     return function(){
//         console.log(hello);
        
//     }
// }
// abcd()();

// A function which take another function as an argument or returns a function from it is know as higher order functions.
// function x (){
//     console.log("hello");
    
// }
// function y (x){ //y is the hofs.
//  x();
// }

// //example of hofs
// const radius = [3, 1, 2, 4];
// const calculateArea = function(radius) {
//   const output = [];
//   for (let i = 0; i<radius.length; i++) {
//     output.push(Math.PI * radius[i]*radius[i]);
//   }
//   return output;
// };
// console.log(calculateArea(radius));

const radius = [3, 1, 2, 4];
const calculateArea = function(radius){
    const output = [];
    for(let i = 0; i<radius.length; i++){
        output.push(Math.PI * radius[i]*radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));

const calculateciclefumce = function(radius){
    const output = [];
    for(let i = 0; i<radius.length;i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}
console.log(calculateciclefumce(radius));

const diameter  = function(radius){
    const output = [];
    for(let i =0 ; i<radius.length;i++){
        output.push(2*radius[i]);
    }
    return output;
}
console.log(diameter(radius));


// //callback

//  function abcd(val){

//  }
//  abcd(function(){ //callback
//  })

// //first class fnc -> first class fnc ek darja hai jo ki js mein fncs ko mila hai, is darje mein kaha jaata hai ki fncs ko aap value ki tarah use kr sakte ho

// function avcd(val){

// }
// avcd(function(){

// })

//pure function 
//ek asa function jo bahar ki value change na KeyboardEvent


//impure function
// A function that modifies external state.

//global scope
// we can use anywhere

// //local scope
// function abcd(){
//     var a = 12;
// }

// closures -> closure ek concept hai jismein function return karta hai ek aur function and returned  function mein aap use krte ho parent function ka kai data.

//object :- combination of key value pairs
// var obj ={
//     name : "vrushali",
//     age : 20
// };

//for storing one or more elements use:- array
// for storing information about an elememt use :- object