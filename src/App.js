
// import {useState } from "react";
import MyRegistration from "./MyRegistration";
import MyToDo from "./pages/MyToDo";
// import MyRegistration from "./MyRegistration";
import { BrowserRouter,Link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>

    <BrowserRouter>

    <Link to={"/home"}>Home</Link>
    <Link to={"/todo"}>ToDo</Link>
    <Link to={"/registration"}>Registration</Link>

    <Routes>
 
     <Route path="/" element={<h1>Hello</h1>}/> 

     <Route path="/home" element={<h1>Home</h1>}/> 

     <Route path="/todo" element={<MyToDo />}/>   

     
     <Route path="/registration" element={<MyRegistration />}/>

     
     <Route path="*" element={<h1>page not found</h1>}/>


    </Routes>
    </BrowserRouter>
 
    </>
  );
}



export default App;