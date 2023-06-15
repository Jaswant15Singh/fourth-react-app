function App(){
  return(
    <>
    <h1>hello</h1>
    <MessageDemo message="jas"/>
    <MessageDemo message="yash"/>
    <MessageDemo message="aman"/>
    </>
  );
}

function MessageDemo(props){
  console.log("hii",props);
  return(
    <>
    <h1>Hello {props.message}</h1>
    </>
  );
}
export default App;