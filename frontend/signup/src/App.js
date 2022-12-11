import { useState } from "react";
import axios from 'axios';
import React  from 'react';
function App() {
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [age,setAge] = useState();
  const signup = (e) => {
    e.preventDefault()
    axios.post('http://localhost:1212/signup',{
      username: username,
      email : email,
      password : password,
      age : age,
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
       console.log(err)
    })
  }
  const login = (e) => {
    e.preventDefault()
    console.log(email,password);
    axios.post('http://localhost:1212/signup/login',{
      email : email,
      password : password
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
       console.log(err)
    })
  }
 let [x, Setx] = useState(1);
 return( 
<>
  <button onClick={() => {Setx(1)}}>signup</button>
  <button onClick={() => {Setx(0)}}>login</button>
  {x === 1 ? 
    <div className = "app">
    <h1>Yoga Classes Registration</h1>
    <form onSubmit={signup}>
      <p>UserName</p>
      <input
      required
      type = "text"
      value = {username}
      onChange = {(e) => {
        setUsername(e.target.value)
      }}
      />
      <p>email</p>
      <input
      required
      type = "email"
      value = {email}
      onChange = {(e) => {
        setEmail(e.target.value)
      }}
      />
      <p>Password</p>
      <input
      required
      type = "text"
      value = {password}
      onChange = {(e) => {
        setPassword(e.target.value)
      }}
      />
      <p>Age</p>
      <input
      required
      type = "number"
      value = {age}
      onChange = {(e) => {
        setAge(e.target.value)
      }}
      />
      <button type = "submit"> submit </button>
      </form>
    </div>
   :
   <div className = "app">
   <h1>Yoga Classes Login</h1>
   <form onSubmit={login}>
     <p>email</p>
     <input
     required
     type = "email"
     value = {email}
     onChange = {(e) => {
       setEmail(e.target.value)
     }}
     />
     <p>Password</p>
     <input
     required
     type = "text"
     value = {password}
     onChange = {(e) => {
       setPassword(e.target.value)
     }}
     />
     <button type = "submit"> submit </button>
   </form>
 </div> 
   }
</>)

}

export default App;
