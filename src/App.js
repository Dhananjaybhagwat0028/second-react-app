

// interpolation using object literal

function App() {
  let id = "p1";
  let str = "never give up"
  
  return (
    <>
      <h1 id="p1">hello jerry</h1>
      <h1 id={"p1"}>hello tom</h1>
      <h1 id={"p1"}>hello nick</h1>
      <h1 id={`p1`}>hello chris</h1>
      <h1 id={'p1'}> {str}</h1>
      <h1 id={'p1'}> {id}</h1>
    </>
  );                
}
export default App;
