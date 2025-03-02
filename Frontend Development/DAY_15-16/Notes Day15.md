# Day 15: Primitive Data Types in JavaScript

Primitive data types are immutable and stored directly in memory.

## Primitive Data Types:
1. **Number** (Integer & Floating-point)
2. **String** (Text enclosed in quotes)
3. **Boolean** (Represents true or false)
4. **Null** (Represents an empty or non-existent value)
5. **Undefined** (Declared but not assigned a value)
6. **Symbol** (Unique and immutable value)
7. **BigInt** (Handles large numbers beyond `Number.MAX_SAFE_INTEGER`)

---

## Reference (Relative) Data Types in JavaScript
Reference data types are stored in memory by reference and can be modified.

1. **Object** (Collection of key-value pairs)
2. **Array** (Ordered list of values)

---

## JavaScript Data Types
JavaScript has 8 data types, categorized into Primitive and Reference types.

### Example:
```javascript
let num = 10; // Number
let text = "Hello"; // String
let isActive = false; // Boolean
let data = null; // Null
let notDefined; // Undefined
let sym = Symbol("id"); // Symbol
let list = [1, 2, 3]; // Array
let obj = { key: "value" }; // Object
```

---

## Some Important Values in JavaScript
1. `undefined` (Variable declared but not assigned a value)
2. `null` (Intentional absence of value)
3. `NaN` ("Not-a-Number" - Invalid mathematical operations)
4. `Infinity` (Represents an infinite value)

---

## Basic Operators in JavaScript
1. **Arithmetic Operators** (`+`, `-`, `*`, `/`, `%`, `++`, `--`)
2. **Assignment Operators** (`=`, `+=`, `-=`, `*=`, `/=`, `%=`)

### Example:
```javascript
let a = 10;
let b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
```

3. **Comparison Operators** (`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`)
4. **Logical Operators** (`&&`, `||`, `!`)

### Example:
```javascript
console.log(10 > 5); // true
console.log(10 === "10"); // false
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
```

---

## Variable Hoisting in JavaScript
Hoisting moves variable and function declarations to the top of their scope before execution.

1. **Using var** (Hoisted but Undefined)
2. **Using let and const** (Hoisted but Not Initialized)

### Key Takeaway:
- `var` is hoisted with an initial value of `undefined`
- `let` and `const` are hoisted but remain in the Temporal Dead Zone until assigned.

---

## Condition Operators in JavaScript
1. **if-else Statement**
2. **Ternary Operator**

### Key Takeaway:
- `if-else` gives more flexibility for multiple conditions and is easy to read.
- The ternary operator is great for simple conditions in a single line.

### Example:
```javascript
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message);
```

---

## Loops in JavaScript
1. **for Loop** - Used when the number of iterations is known beforehand.
2. **while Loop** - Used when the loop should run as long as a condition is true.
3. **do...while Loop** - Runs the block of code once, then checks the condition.

### Example:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

do {
  console.log(j);
  j++;
} while (j < 5);
```

---
---

