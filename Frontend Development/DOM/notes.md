# Day_26-27-28-29-30-31 DOM Manipulation – Clean & Easy Notes (JavaScript)

 📘 Based on class PDF (content preserved, layout improved for study & GitHub)

---

## 🌐 What is DOM Manipulation?

DOM (Document Object Model) manipulation allows JavaScript to **access, change, add, or remove HTML elements dynamically**.

It helps in making web pages **interactive and dynamic**.

---

## 📌 Selecting Elements in the DOM

Before changing anything on a webpage, we must **select HTML elements**.

### 🔹 Common Selection Methods

| Method               | Use                                           |
| -------------------- | --------------------------------------------- |
| `getElementById()`   | Selects a single element by ID                |
| `querySelector()`    | Selects first matching element (CSS selector) |
| `querySelectorAll()` | Selects all matching elements                 |

### 💡 Use Cases

* Highlighting a header
* Targeting buttons for event listeners
* Styling multiple elements dynamically

### 🧩 Code Examples

```javascript
// Select single element by ID
const heading = document.getElementById("title");

// Select first matching element
const firstButton = document.querySelector("button");

// Select all matching elements
const allButtons = document.querySelectorAll("button");
```

---

## 📝 Changing HTML Content

JavaScript allows us to **change text or HTML inside elements**.

### 🔹 Properties Used

* `innerText` → for plain text
* `innerHTML` → for HTML content

### 💡 Use Cases

* Showing messages after form submission
* Updating content without page reload (AJAX)

### ❓ Interview Q&A

**Q: Difference between `getElementById()` and `querySelector()`?**

**A:**

* `getElementById()` → works only with IDs
* `querySelector()` → supports CSS selectors (`.class`, `#id`, `tag`)

**Q: Difference between `querySelectorAll()` and `getElementsByClassName()`?**

**A:**

* `querySelectorAll()` → static NodeList
* `getElementsByClassName()` → live HTMLCollection

---

## 🎨 Changing CSS Using JavaScript

You can dynamically change styles using the `.style` property.

### 💡 Use Cases

* Highlight active menu items
* Change themes (dark/light mode)
* Give visual feedback on user action

### ❓ Interview Question

**Q: How to change background color dynamically?**

**A:** Using `.style`

```javascript
element.style.backgroundColor = "yellow";
```

---

## 💡 DOM Events

Events allow JavaScript to **respond to user actions**.

### 🔹 Common DOM Events

* `click`
* `mouseover`
* `mouseout`
* `keydown`
* `keyup`
* `submit`
* `scroll`

### ❓ Interview Q&A

**Q: Can we attach multiple event listeners to one element?**

**A:** Yes, multiple listeners can be attached for same or different events.

---

## 💡 Mini Project – Bulb ON/OFF Application

A small project to understand **DOM + Events + State**.

### 🧠 Concept

* Toggle bulb image on button click
* Track state using a boolean variable

### 🧩 HTML

```html
<img id="bulb" src="off.png" />
<button id="toggleBtn">Toggle Bulb</button>
```

### 🧩 JavaScript

```javascript
const bulb = document.getElementById("bulb");
const btn = document.getElementById("toggleBtn");

let isOn = false;

btn.addEventListener("click", () => {
    if (isOn) {
        bulb.src = "off.png";
        isOn = false;
    } else {
        bulb.src = "on.png";
        isOn = true;
    }
});
```

### ❓ Interview Questions

**Q: How do you change image src dynamically?**

**A:** By updating the `.src` property

**Q: How do you track toggle state?**

**A:** Using a boolean variable (`isOn`)

---

## ✅ Summary

* DOM lets JS control HTML & CSS
* Selection is the first step
* Events make pages interactive
* Mini projects strengthen concepts

📌 *Code recreated for learning purpose based on class notes*
