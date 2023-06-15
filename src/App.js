function App(){
  return(
    <>
    <h1>hello</h1>
    <MessageDemo message="jas"/>
    <MessageDemo message="yash"/>
    <MessageDemo message="amar"/>
    </>
  );
}

function MessageDemo({message,name}){
  console.log("hii",message);
  return(
    <>
    <h1>Hello {message}</h1>
    </>
  );
}
export default App;