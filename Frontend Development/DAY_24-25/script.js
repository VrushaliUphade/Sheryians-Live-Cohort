//what is callback functions in javascript.
 //A Function that is passed on as argument to another function is called callback function.
 //ek asa function jo dusrya function la argument mhanun pathavla jato tyala callback function mhantat
 

 //
 //  function x(val){
// val();
//  }
//  x(function y(){
//  });

//higher order function
//A function which take another function as an argument or return a function on it is known as higher order function
// ek aisa function jo accept kare dusre function in the parameter or return kare ek aur function, is know as higher order function.

// function x(){

// }
// function y(x){
//  x();
// }

// //closures
// // A closure is a function that has access to the parent scope, after the parent function has closed.

// function x(){
//     let a =10;
//     function y(){
//      console.log(a);
     
//     }
//     y();
// }
// x();


// //Questions
// //1. Create a function that takes another function as an argument and calls it after 3 seconds (HOF+ Callback).
// function callerfunc(fn){
//    setTimeout(fn, 3000);
// }
// callerfunc(function(){
//    console.log("Hello");  
// })

// //2.Implement your own version of `.map()` as a higher-order function.

// function hap(arr,fn){
//  let newarr = [];
//  for(let i = 0;i<arr.length;i++ ){
//        newarr.push(fn(arr[i]));
//  }
//  return newarr;
// }
// let ans = hap([1,2,3,4,5,6],function(value){
//    return value + 3;
// })
// console.log(ans);

// //3.Write a function that uses closures to create a counter.

// function counter(){
// let count = 0;
// return function(){
//     count++;
//     console.log(count);
    
// }
// }
// let makecount = counter();
// makecount();
// makecount();
// makecount();

// //Implement a function that limits how many times another function can be called (Closure + HOF)
// function fnlimiter(fn,limit){
//     let totalcount = 0;
//     return function(){
//       if(totalcount<limit){
//             totalcount++;
//             fn()
//       }
//     }
// }
// let limiter = fnlimiter(function(){
//     console.log("Hello");
// },3);

// limiter();
// limiter();
// limiter();
// limiter();


// //Create a function that takes a callback and executes it after every `n` seconds indefinitely.
// function repeatfn (fn,time){
//     setInterval(fn,time)
// }
// repeatfn(function(){
//     console.log("Hello");
// },2000);

// //Implement a function that returns a function with a preset greeting (Closure).
// function greetingfn(greet){
//     return function(name){
//  console.log(`${greet} ${name}`);
 
//     }
// }
// let greeting = greetingfn("Hello")
// greeting("Vrushali");
// greeting("Harshit");

// //Implement a function that takes a callback and only executes it once (HOF + Closure).
// function onlyOncecaller(cd){
//     let executed = false;
// return function(){
//     if(!executed){
//         executed = true;
//     cd();
//     }
//     else{
//         console.error("Already executed once");
//     }
// };
// }
// let func = onlyOncecaller(function(){
// console.log("run");
// })
// func()
// func()

