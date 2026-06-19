// import { useState } from "react"


// const App = () => {
// const [username,setusername]=useState("Sarthak")
// const changeHandle =()=>{
//   setusername("Vrushali");
 
// }
//  console.log(username);
//   return (
//     <div>
// <h1>Username</h1>
// <h2>{username}</h2>
// <button onClick={changeHandle}>Change Name</button>
//     </div>
//   )
// }

// export default App



import { useState } from "react"
import Create from "./components/Create";
import Read from "./components/Read";
const App = () => {
const [ user, setUser ] = useState ([
  { name : "vrushali", age: 21},
  { name : "john", age: 12},
  { name : "Pratik", age: 19},

])
  return (
    <div>
      <Create />
     <Read user={user} setUser={setUser} />
  
    </div>
  );
};

export default App