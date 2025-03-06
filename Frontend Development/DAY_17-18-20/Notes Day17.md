# Day 17: JavaScript Mastery

## Working with Strings in JavaScript
JavaScript provides various methods to manipulate and work with strings. Since strings are immutable, any modification results in a new string.

```javascript
let str = "Hello, World!";
console.log(str.length); // Output: 13
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
console.log(str.toLowerCase()); // Output: "hello, world!"
console.log(str.includes("World")); // Output: true
```

---

## Conditional Operators in JavaScript

Conditional operators help control the flow of execution based on conditions.

```javascript
let age = 18;
let message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message);
```

---

## Loops in JavaScript

Loops allow executing a block of code multiple times.

### For Loop
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}
```

### While Loop
```javascript
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration: " + j);
    j++;
}
```

### Do-While Loop
```javascript
let k = 0;
do {
    console.log("Do-While Iteration: " + k);
    k++;
} while (k < 5);
```

---

## Functions in JavaScript

Functions allow code reuse and modularity.

```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: "Hello, Alice!"
```

---

## Scoping & Closures in JavaScript

### Scope
Scope determines the visibility of variables.

```javascript
let globalVar = "I am global";

function checkScope() {
    let localVar = "I am local";
    console.log(globalVar); // Accessible
    console.log(localVar); // Accessible
}

checkScope();
// console.log(localVar); // Error: localVar is not defined
```

### Closures
Closures allow functions to remember the scope in which they were created.

```javascript
function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    };
}

const newFunction = outerFunction("Hello");
newFunction("World"); // Output: "Outer: Hello, Inner: World"
```

---

