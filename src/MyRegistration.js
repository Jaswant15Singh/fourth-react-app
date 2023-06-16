import { useState } from "react";

function MyRegistration(){
  

    let[user,setUser]=useState({
      username:"",
      password:"",
      email:"",
      mobile:"",

    });

    let handlerUserNmaeAction=(e) =>{
    let newUser={...user,username:e.target.value};
    };

    
    let handlerPasswordAction=(e) =>{
      let newUser={...user,password:e.target.value};
      };

      
    let handlerEmailAction=(e) =>{
      let newUser={...user,email:e.target.value};
      };

      
    let handlerMobileAction=(e) =>{
      let newUser={...user,mobile:e.target.value};
      };

      let registerAction=async () =>{
let url='http://localhost:4000/adduser?username=${user.username}&password=4{user.password}&email={user.email}&mobile={user.mobile}'

 await fetch(url);
      }


    return (
    <>

    <input className="form-control" 
    type="text" placeholder="Enter username"
    value={user.username}
    onChange={handlerUserNmaeAction}
    />

    <input className="form-control" type="password" placeholder="Enter Password"
    value={user.password}
    onChange={handlerPasswordAction}
    />

    <input className="form-control" type="text" placeholder="Enter email"
    value={user.email}
    onChange={handlerEmailAction}
    />

    <input className="form-control" type="text" placeholder="Enter Mobile no"
    value={user.mobile}
    onChange={handlerMobileAction}
    />

    <input type="button" value="Register" className="w-100" onCanPlay={registerAction} />

    </>
  )
}

export default MyRegistration;