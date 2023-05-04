import './styles.css';
import React from 'react'
import {useState} from 'react';
function EmailState() {
    let[email,setEmail]=useState("");
    let[pass,setPass]=useState("");
    let[users,setUsers]=useState([])
    function createUsers(){
       if(email&&pass){
        var myArr=users;
       myArr.push({email:email,password:pass});
       setUsers(myArr);
       setEmail("");
       setPass("");
       }else{
        alert("fill all details")
       }
    }
  return (
    <>
     
      <input type="text" value={email} onChange={(e)=>{
      setEmail(e.target.value);
      }}></input>
      <input type="password" value={pass} onChange={(e)=>{
      setPass(e.target.value);
      }}></input>
     <button onClick={createUsers}>Click Me</button>
      {users.map((user)=>{
        return(<><p>{user.email}-
        {user.password}</p></>)
      })}
    </>
  )
}

export default EmailState