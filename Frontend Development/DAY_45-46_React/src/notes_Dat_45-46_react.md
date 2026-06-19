## 🔹 Class 3: State, Conditional Rendering, Lists & Keys

### 1. State
**Theory:**  
State stores **dynamic data** in a component.

**Code Structure:**
```jsx
const [count, setCount] = useState(0);
```

### 2. Conditional Rendering
**Theory:**  
Render based on conditions.

**Code Structure:**
```jsx
{isLoggedIn ? <h1>Welcome</h1> : <h1>Please Log In</h1>}
```

### 3. Lists & Keys
**Theory:**  
Render multiple elements with `.map()`, keys identify elements.

**Code Structure:**
```jsx
const fruits = ['Apple', 'Banana'];
<ul>
  {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))}
</ul>
```

## 🔹 Class 4: Forms, Controlled Components, React Hook Form, useRef

### 1. Forms & Controlled Components
**Theory:**  
Controlled inputs are tied to component state.

**Code Structure:**
```jsx
const [name, setName] = useState('');
<input value={name} onChange={(e) => setName(e.target.value)} />
```

### 2. React Hook Form
**Theory:**  
Efficient form management.

**Code Structure:**
```jsx
import { useForm } from "react-hook-form";

function MyForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <input {...register("username")} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### 3. useRef
**Theory:**  
Access DOM nodes or store mutable values.

**Code Structure:**
```jsx
const inputRef = useRef();
<input ref={inputRef} />
```
