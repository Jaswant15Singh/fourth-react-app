import { useRef, useState } from "react";

function App(){
  return(
    <>
    <h1>Stateful list</h1>
    <ListDemo/>
    </>
  );
}

function ListDemo(){
  
// let data=["Good Morning"];
let [list,setList]=useState(["Jaswant"]);
let inputRef=useRef();
let addItemAcction = () => {
 
  let inputValue=inputRef.current.value;
  let newList=[inputValue,...list];
  // console.log(newList);
  setList(newList);
  inputRef.current.value="";
};

return(
  <>
  <input type="text" ref={inputRef} placeholder="WhatsApp"/>
  <input type="button" value="Add New Item" onClick={addItemAcction} />
  {list.map((item)=>
  (<h1>{item}</h1>))}
      </>
  );
}
export default App;