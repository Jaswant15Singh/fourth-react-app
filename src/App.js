import { useState } from "react";

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

let addItemAcction = () => {
  let inputElement=document.querySelector("#id1");

  let inputValue=inputElement.value;
  let newList=[...list,inputValue];
  console.log(newList);
  setList(newList);
  inputElement.value="";
};

return(
  <>
  <input type="text" id="id1" placeholder="WhatsApp"/>
  <input type="button" value="Add New Item" onClick={addItemAcction} />
  {list.map((item)=>
  (<h1>{item}</h1>))}
      </>
  );
}
export default App;