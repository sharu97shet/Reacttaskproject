import logo from './logo.svg';
import './App.css';
import { Home } from './Home'; 
import { useEffect, useState } from 'react';

function App() {

  const [color, setcolour] = useState("blue");

  //document.body.style.backgroundColor= color 

  
  const [active, setActive] = useState(false);

  

  const handleclick=()=>
  {
     //alert("yes");
 
     setActive(!active)
  }

   const click=()=>
   {
     // alert("yes");
    
     if (color=="blue")
     {

      
      setcolour("yellow" )
     
     }

     else {
    
      setcolour("blue" )
      //document.body.style.backgroundColor= "blue" 
     }

   

    
   }

  useEffect(()=>{

   document.body.style.backgroundColor=color

    } ,[color])


  return (
    <div className="App">
      <header className="App-header">


        
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <astyle={{backgroundColor:active?"black":"white"}}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React library
          
        </a> */}

         <div onClick={()=>{
          click()
        }}    >

          <h1>welcome to my blog</h1>

         </div>



        {/* <button  onClick={()=>{
          click("yellow")
        }} style= {document.body.style = 'background: red;'}  >
          click on the button to change the backgroundColor

        </button> */}


           
      </header>
    </div>
  );
}

export default App;
