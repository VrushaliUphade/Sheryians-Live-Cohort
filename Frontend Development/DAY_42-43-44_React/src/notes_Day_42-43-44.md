
# 🚀 Sheryians Live Cohort – Day 42-43-44 Notes
## React Learning Notes 

### ✅ Started Learning React
React is a JavaScript library used to build fast and interactive user interfaces (UI), especially for Single Page Applications (SPA).

### Why React?
- Component-based architecture
- Reusable code
- Virtual DOM for better performance
- Easy to manage UI updates
- Strong community support

---

## ✅ VS Code Setup

### Tools Required
- VS Code
- Node.js
- npm (comes with Node.js)

### Verify Installation
```bash
node -v
npm -v
```
## ✅ Create a React App (Using Vite)
```
npm create vite@latest
```
## ✅ Install Dependencies
```
npm install
```
## ✅ Run Development Server
```
npm run dev
```
## ✅ Explored React Folder Structure
Typical Vite React Project Structure
```
project-name/
│
├── node_modules/
├── public/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
└── index.html
```
## Important Files
### 📄 src/

Contains the main application code.

### 📄 App.jsx

Main React component where UI is created.

### 📄 main.jsx

Entry point of the React application.

### 📄 public/

 Stores static files like images and icons.

### 📄 package.json

Contains project information and dependencies.

### 📄 node_modules/

Stores all installed packages.

---
## ✅ Ran My First React App
 ### Start the Development Server
 ```
 npm run dev
 ```
 ### Output
 A local URL is generated, usually:
 ```
 http://localhost:5173
 ```
 Open it in your browser to see the React application running.


## Babel Notes for React 🚀

## ✅ What is Babel?

Babel is a JavaScript compiler that converts modern JavaScript code into older JavaScript versions that browsers can understand.

In React, Babel is mainly used to convert **JSX** into regular JavaScript.

---

## ✅ Why Do We Need Babel?

Browsers do not understand JSX directly.

Example JSX:

```jsx
const element = <h1>Hello React!</h1>;
```

Babel converts it into:
```js
const element = React.createElement(
  "h1",
  null,
  "Hello React!"
);
```
Now the browser can understand and execute the code.

## ✅ What Babel Does
### 1. Converts JSX to JavaScript
```jsx
<h1>Hello</h1>

      ↓
```
```js
React.createElement("h1", null, "Hello");
```
### 2. Converts Modern JavaScript
```
const greet = () => {
  console.log("Hello");
};

               ↓
Converts to older JavaScript for better browser compatibility.
```
## ✅ Babel in React

When you create a React project using:
```
npm create vite@latest
```
or
```
npx create-react-app my-app
```

Babel is already configured in the background.

You usually don't need to install or configure it manually.

### React Flow
```

JSX Code
    ↓
  Babel
    ↓
JavaScript Code
    ↓
 Browser
 ```
Example
React JSX
```jsx
function App() {
  return <h1>Hello React</h1>;
}
```
After Babel Compilation
```jsx
function App() {
  return React.createElement(
    "h1",
    null,
    "Hello React"
  );
}
```

# React Notes (Interview-Focused)

## 🔹 Class 1: Intro to React, Reconciliation, SPA vs MPA, JSX, Babel, Vite, npm

### 1. Intro to React
**Theory:**  
React is a JavaScript **library** for building **component-based UIs**. It uses a **Virtual DOM** for efficient rendering and supports **reusable components**.

**Code Structure:**
```jsx
function App() {
  return <h1>Hello, React!</h1>;
}
```

**Use Case:**  
Ideal for creating fast, scalable **Single Page Applications** with dynamic data.

**Interview Example:**  
Q: What is the Virtual DOM?  
A: A lightweight JS object that React uses to optimize DOM updates.

### 2. Reconciliation
**Theory:**  
Reconciliation is how React **diffs the new Virtual DOM with the previous** one and updates only the changed parts.

**Code Structure:**
```jsx
setCount(count + 1); // Triggers reconciliation
```

**Use Case:**  
Enhances performance by **avoiding full re-rendering**.

**Interview Example:**  
Q: How does React know what to update?  
A: Through the reconciliation algorithm using keys and Virtual DOM comparison.

### 3. SPA vs MPA
**Theory:**  
SPA: Loads only **one HTML page**, updates via JS.  
MPA: Loads **new HTML pages** from the server for each route.

**Code Structure:**
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**Use Case:**  
- SPA: Interactive dashboards.  
- MPA: SEO-oriented sites.

**Interview Example:**  
Q: How does routing work in SPA?  
A: Via React Router, which handles navigation **without page reloads**.

### 4. JSX
**Theory:**  
JSX is a **syntax extension** that looks like HTML in JS. Transpiled to `React.createElement()`.

**Code Structure:**
```jsx
const element = <h1>Hello, JSX!</h1>;
```

**Use Case:**  
Improves readability & structure of UI code.

**Interview Example:**  
Q: Can a component return multiple JSX elements?  
A: Yes, by wrapping them in a fragment: `<>...</>`.

### 5. Babel
**Theory:**  
Babel is a **JavaScript transpiler** that converts modern JS/JSX into code browsers understand.

**Use Case:**  
JSX support, backward compatibility.

**Interview Example:**  
Q: Why do we need Babel?  
A: JSX and ES6+ syntax is not directly readable by browsers.

### 6. Vite
**Theory:**  
Vite is a **fast build tool** using ES Modules and modern bundling.

**Code Structure:**
```bash
npm create vite@latest my-app --template react
```

**Use Case:**  
Fast startup, better HMR.

**Interview Example:**  
Q: CRA vs Vite?  
A: Vite is faster, modern and uses Rollup.

### 7. npm
**Theory:**  
npm is a **package manager** that installs libraries like React.

**Code Structure:**
```bash
npm install react react-dom
```

**Use Case:**  
Manages app dependencies.

**Interview Example:**  
Q: Difference between dependencies and devDependencies?  
A: `dependencies` are for production, `devDependencies` are for development.

## 🔹 Class 2: Import/Export, Boilerplate, Functional Components, Event Listeners & Handlers

### 1. Import / Export
**Theory:**  
Used to modularize and reuse code.

**Code Structure:**
```jsx
// Greet.js
export default function Greet() {
  return <h1>Hello</h1>;
}
// App.js
import Greet from './Greet';
```

**Interview Example:**  
Q: Named vs default export?  
A: Default exports can be renamed on import. Named must match exactly.

### 2. Boilerplate
**Theory:**  
Basic folder & code setup to start a React project.

**Code Structure:**
```bash
npm create vite@latest my-app --template react
```

### 3. Functional Components
**Theory:**  
JS functions that return JSX. Modern React uses this style.

**Code Structure:**
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**Interview Example:**  
Q: Can functional components manage state?  
A: Yes, using hooks like `useState`.

### 4. Event Listeners & Handlers
**Theory:**  
Used for UI interactivity.

**Code Structure:**
```jsx
function ClickMe() {
  const handleClick = () => alert("Button clicked!");
  return <button onClick={handleClick}>Click Me</button>;
}
```

**Interview Example:**  
Q: How to pass parameters to handlers?  
A: Use an arrow function: `onClick={() => handleClick(id)}`

