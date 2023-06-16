
// import {useState } from "react";
import MyRegistration from "./MyRegistration";
import MyToDo from "./pages/MyToDo";
// import MyRegistration from "./MyRegistration";
import { BrowserRouter,Link, Route, Routes, useNavigate } from "react-router-dom";
function App() {
  return (
    <>
    
    <BrowserRouter>
     
    
    <NavigationList/>
    <Routes>
 
     <Route path="/" element={<h1>Hello</h1>}/> 

     <Route path="/home" element={<h1>Home</h1>}/> 

     <Route path="/todo" element={<MyToDo />}/>   

     
     <Route path="/registration" element={<MyRegistration />}/>


     
     <Route path="*" element={<h1>page not found</h1>}/>


    </Routes>
    <NavigationButton/>
    </BrowserRouter>
 
    </>
  );
}

function NavigationList(){
  return(
    <>
    <Link to={"/home"}>Home</Link>
    <Link to={"/todo"}>ToDo</Link>
    <Link to={"/registration"}>Registration</Link>

    </>
  );
}

function NavigationButton(){
const navigate=useNavigate(

);
  
  let goToHomeAction=() =>navigate("/home");
  let goToDoAction=() => navigate("/todo");
  let goToRegistrationAction=() => navigate("/registration");
  return(
<>
<div>
<input type="button" value="Home" onClick={goToHomeAction}/>
<input type="button" value="ToDo" onClick={goToDoAction}/>
<input type="button" value="Registration" onClick={goToRegistrationAction}/>
</div>
</>
  );
}


export default App;