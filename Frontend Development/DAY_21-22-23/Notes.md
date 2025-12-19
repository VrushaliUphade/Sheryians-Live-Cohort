# Day 21: JavaScript Practice Questions & Solutions 🚀

## 🌟This document contains JavaScript questions with detailed solutions.


### 1. Log "Hello, JavaScript!" to the console in 3 different ways.

```javascript
// Way 1
console.log("Hello, JavaScript");
// Way 2
console.warn("Hello, JavaScript!");
// Way 3
console.error("Hello, JavaScript");
```

### 2. Perform 36 * 2 - (10 / 2) + 7 and log the result.

```javascript
console.log(36 * 2 - (10 / 2) + 7);
```

### 3. Log the data type of "1234", 123, true, and null using typeof.

```javascript
console.log(typeof("1234"));
console.log(typeof(123));
console.log(typeof(true));
console.log(typeof(null));
```

### 4. Write a program that swaps the values of two variables.

```javascript
// Way 1
let a = 12;
let b = 13;
let c;
c = a;
a = b;
b = c;
console.log(a, b);

// Way 2
let a = 12;
let b = 13;
[a, b] = [b, a];
console.log(a, b);
```

### 5. Use console.group() to organize logs into a group.

```javascript
console.group("Subjects");
console.log("math");
console.log("science");
console.log("english");
console.groupEnd();
```

---

### 6. Declare a const object, modify its properties, and log the updated object.

```javascript
const obj = {
    name: "riya",
    age: 20,
};
obj.age = 30;
console.log(obj);
```

### 7. Convert "50" (string) into a number using 3 different methods.

```javascript
console.log(Number("50"));
console.log(parseInt("50"));
console.log(+"50");
```

### 8. Check if "JavaScript" contains "Script" without using .includes().

```javascript
let str = "JavaScript";
if (str.indexOf("Script") === -1) {
    console.log(false);
} else {
    console.log(true);
}
```

### 9. Create an array of 5 numbers and log the sum using .reduce().

```javascript
let Array = [1, 2, 3, 4, 5];
let sum = Array.reduce((acc, val) => acc + val);
console.log(sum);
```

### 10. Explain the difference between undefined, null, and NaN with examples.

```javascript
// undefined: A variable that has been declared but not assigned a value.
let a;
console.log(a); // undefined

// null: Represents an intentional absence of value.
let b = null;
console.log(b); // null

// NaN: Represents a value that is not a number.
console.log("hello" * 3); // NaN
```

---

# Day 22: JavaScript Practice Questions & Solutions 🚀

### 11. Write a while loop to print numbers from 10 to 1 in reverse.

```javascript
let i = 10;
while (i > 0) {
    console.log(i);
    i--;
}
```

### 12. Use a while loop to print multiples of 3 from 3 to 30.

```javascript
let i = 3;
while (i < 31) {
    console.log(i);
    i += 3;
}
```

### 13. Write a program to calculate the sum of numbers from 1 to 100 using a loop.

```javascript
let sum = 0;
for (let i = 1; i < 101; i++) {
    sum = sum + i;
}
console.log(sum);
```

### 14. Create a nested loop to print a star pattern.

```javascript
// Que 14: To be solved after covering some topics.
```

### 15. Use a for...of loop to iterate over the string "JavaScript".

```javascript
let str = "Javascript";
for (let i of str) {
    console.log(i);
}
```
# Day 23: JavaScript Practice Questions & Solutions 🚀
### 16. Remove duplicate values from an array.
```javascript
let arr = [1,1,1,3,4,5,6,6,7,8,3,5,6,9,8,2,2,2];
let ans = [...new Set(arr)];
console.log(ans);
```

### 17. Find the second largest number in an array.
### beginner
```js
let arr = [21,4,2,9,4,2,23];
let ans = [...new Set(arr)];
let newArr = ans.sort(function(a,b){
    return b-a;
})
console.log(newArr[1]);
```
### Advance
```js
let arr = [21,4,2,9,4,2,23];
 console.log([...new Set(arr)].sort(function(a,b){
    return b-a;
})[1]);
```

### 18. Sort an array in descending order. 
```js
let arr = [3,2,1,8,4,5];
let ans = arr.sort(function(a,b){
    return b - a;
})
console.log(ans);
```
### 19. Reverse an array without using .reverse().
```js
let arr = [1,2,3,4,5];
let arr2 =[]
for(let i = arr.length-1; i>=0;i--){
    arr2.push(arr[i]);
}
console.log(arr2);
```
### 20. Find the most frequent element in an array.
```js
let arr = [3,4,1,3,4,6,7];
var obj = {};
arr.forEach(function(val){
    obj[val]===undefined?(obj[val]=1):[val]++;
});
```
This concludes **Day 21-22-23** of the JavaScript Practice Questions & Solutions journey! 🚀