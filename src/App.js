//Interpolation :- means data binding in jsx


function App() {
  let str = `Hello world`;
  let pi = 3.131;
  let  num = 21;
  let active = true ;
   let isLogin = true ;

  return (
    <>
      <h1>HELLO WORLD</h1>
      <h1> pi = {pi} !!</h1>
      <h1>{str}</h1>

      {/**login logout logic */}
      {isLogin && <h1>Welcome to Cdac.!!</h1> }



      {/** uses of boolean */}
      <h1>{active ?"software developer":"web developer"}</h1>

      {/**most usefulll */}
      {active && <h1>Its true</h1> }
      {active ? <h1>Its true</h1>: <h1>is False</h1> }
    </>
  );                
}
export default App;
