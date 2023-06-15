//import "bootstrap/dist/css/bootstrap.css";
function App() {
   return (
     <>
       <h1 className="bg-primary text-light p-3">Navbar </h1>
       <Datablock />
       <Datablock />
       <Datablock />
     </>
   );
}

function Datablock(){
   return (
     <>
       <h1 className="bg-primmary text-bg-success p-3 d-flex justify-content-center">
         welcome to cdac
       </h1>
       <div className="  alert alert-secondary border border-danger-subtle m-3">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sit
         enim unde a recusandae doloremque provident nulla totam eligendi
         doloribus! Fugiat, vitae totam praesentium reiciendis illum cumque
         facilis esse natus, a eius nulla quia consequuntur. Libero ipsam magni
         quod. Animi porro soluta modi cumque corrupti praesentium est rem
         numquam unde!z
       </div>
     </>
   );

}

export default App;
