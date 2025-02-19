# Day 14: Basics of JavaScript with ES6+

## JavaScript
JavaScript is a high-level, versatile language for web development.

### Uses
- **DOM Manipulation** → Modify HTML/CSS dynamically
- **Event Handling** → Respond to clicks, key presses, etc.
- **Asynchronous Communication** → Fetch/send data (APIs, AJAX)
- **Full-Stack** → Client-side & server-side (Node.js)
- **Cross-Platform** → Web, mobile (React Native), desktop (Electron.js)

---

## Including an External JavaScript File
### Best Practices
- Use the `<script>` tag with the `src` attribute to link an external JavaScript file.
- Place `<script>` before `</body>` for better page load performance.
- Use `defer` for scripts that depend on HTML content.
- Use `async` for independent scripts that don’t rely on DOM elements.

```html
<script src="script.js" defer></script>
```

---

## Logging with JavaScript

### 1. General Logging
Used to display information in the console.
```javascript
console.log("Hello, World!");
```

### 2. Informational Message
Logs important information.
```javascript
console.info("This is an info message");
```

### 3. Warning Message
Displays warnings in the console.
```javascript
console.warn("This is a warning message");
```

### 4. Error Logging
Logs errors in the console.
```javascript
console.error("This is an error message");
```

### 5. User Input (Prompt)
Asks for user input via a pop-up.
```javascript
let name = prompt("Enter your name");
console.log("Hello, " + name);
```

### 6. Alert Message
Shows a message in an alert box.
```javascript
alert("This is an alert message");
```

### 7. Confirmation Box
Asks the user to confirm an action.
```javascript
let isConfirmed = confirm("Are you sure?");
console.log(isConfirmed);
```

---

## Variables and Keywords in JavaScript
### 1. `var`
- **Scope:** Function-scoped
- **Characteristics:** Allows redeclaration and updating.
```javascript
var x = 10;
var x = 20; // Redeclaration allowed
console.log(x);
```

### 2. `let`
- **Scope:** Block-scoped
- **Characteristics:** Allows updates, but not redeclaration in the same scope.
```javascript
let y = 30;
y = 40; // Allowed
console.log(y);
```

### 3. `const`
- **Scope:** Block-scoped
- **Characteristics:** Cannot be updated or redeclared.
```javascript
const z = 50;
// z = 60; // Error: Assignment to constant variable
console.log(z);
```

---

## Variable Declaration, Initialization, and Updating
### 1. Declaration
Declaring a variable without initializing it.
```javascript
let a;
console.log(a); // undefined
```

### 2. Initialization
Assigning a value to the variable at the time of declaration.
```javascript
let b = 100;
console.log(b);
```

### 3. Updating
Updating the value of a variable.
```javascript
let c = 200;
c = 300; // Allowed
console.log(c);
```

- `let` and `var` allow updates, but `const` does not.

---

## JavaScript Statements and Semicolons
### Statements
Statements are individual instructions in JavaScript, like variable declarations or function calls.
```javascript
let d = 400;
console.log(d);
```

### Semicolons
- Semicolons are optional in JavaScript but help prevent errors, especially when statements are on the same line.
- They are recommended to avoid potential issues with automatic semicolon insertion.
```javascript
let e = 500
console.log(e)
```

---

## Adding Comments in JavaScript
### 1. Single-line Comment
Use `//` to add a comment on a single line.
```javascript
// This is a single-line comment
console.log("Single-line comment example");
```

### 2. Multi-line Comment
Use `/* */` for comments spanning multiple lines.
```javascript
/* This is a
   multi-line comment */
console.log("Multi-line comment example");
```

---

## Expressions in JavaScript vs Statements
### 1. Expression
An expression produces a value (e.g., arithmetic operations or variable assignments).
```javascript
let sum = 5 + 10;
console.log(sum);
```

### 2. Statement
A statement performs an action (e.g., variable declaration, function call).
```javascript
let f = 600;
console.log(f);
```

---

## JavaScript Operators
### Arithmetic Operators
- `+` (Addition)
- `-` (Subtraction)
- `*` (Multiplication)
- `/` (Division)
- `%` (Modulus – Remainder of division)

```javascript
let g = 10;
let h = 3;
console.log(g + h);
console.log(g - h);
console.log(g * h);
console.log(g / h);
console.log(g % h);
```

---

## Increment & Decrement Operators
### Increment (`++`)
Increases the value of a variable by 1.
```javascript
let i = 5;
i++;
console.log(i);
```

### Decrement (`--`)
Decreases the value of a variable by 1.
```javascript
let j = 10;
j--;
console.log(j);
```

