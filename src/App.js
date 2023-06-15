function App(){
  return(
    <>
    <h1 className="alert alert-dark m-3 d-flex justify-content-center align-items-center"style={{height:"200px"}}>hello</h1>
    <MessageDemo/>
    <MessageDemo/>
    </>
  );
}

function MessageDemo(){
  return(
    <>
    <h1 className="alert alert-success m-3">HelloMessage</h1>
    </>
  );
}
export default App;