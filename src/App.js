import {useState } from "react";
import MyTodo from "./pages/MyToDo";
import MyRegistration from "./MyRegistration";
function App() {
  return (
    <>
      <h1>Registration</h1>
      <MyTodo/>
      <hr />
      <MyRegistration/>
  
    </>
  );
}



export default App;