//Interpolation :- means data binding in jsx

// interpolation using object literal

function App() {
  let admin = {id:21 ,name:"dhananjay"};
  
  return (
    <>
      
      <h1>
        ID : {admin.id} <br />
        Name : {admin.name}
      </h1>
    </>
  );                
}
export default App;
