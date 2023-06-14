//Interpolation :- means data binding in jsx


function App() {
  let str = `Hello world`;

  return (
    <>
      {/** i am comment  */}

      <h1>HELLO WORLD</h1>
      <h1>{str}</h1>
      <h1>str</h1>
      <h1>{str.toLowerCase()}</h1>
      <h1>{str.toUpperCase()}</h1>
      <h1>{str.substring(2, 9)}</h1>
    </>
  );                
}
export default App;
