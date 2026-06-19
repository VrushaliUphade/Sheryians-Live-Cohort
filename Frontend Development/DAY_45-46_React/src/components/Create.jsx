import { useState } from "react";
const Create = (props) => {
    console.log(props);
    
const [fullName,setfullName] = useState("")
const [userAge, setuserAge] = useState(18)


const submitHandler = (e)=>{
  e.preventDefault();
  const newUser = {fullName ,userAge};
  console.log(newUser);
  
  //set the user in the setusers
  
}
  return (
    <div><h1>Register usesr</h1>
      <form onSubmit={submitHandler}>
        <input 
       onChange={(e)=>setfullName(e.target.value)}
       value={fullName}
        type="text" 
        placeholder="Full Name"/>
        <input
        onChange={(e)=>setuserAge(e.target.value)} 
        value={userAge}
        type="number" 
        placeholder="Age" />
        <button>Submit</button>
      </form></div>
  )
}

export default Create