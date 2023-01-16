// import React from 'react';
import React,{useState} from 'react';
import ClassComponent from './Handson_1/ClassComponent';
import FunctionComponent from './Handson_1/FunctionComponent'
import './App.css'


const App= () => {
   const [fshow,fsetshow]=useState(false) 
     const fclicked=()=>{
      fsetshow(!fshow)
   }
   const [cshow,csetshow]=useState(false) 
     const cclicked=()=>{
      csetshow(!cshow)
     }

  return (
    <div className='container'>
      <h2 className='heading'>Styling using Function and Class Component</h2>
      <br/>
      <br/>
      <button onClick={fclicked} className='btn'>To see Styling in functional Component</button>
      <button onClick={cclicked} className='btn'>To see Styling in functional Component</button>

      <div className="flexdiv">
        
            {fshow?<FunctionComponent/>:" "} 
       
            {cshow?<ClassComponent/>:" "}
        
      </div>

    </div>
  )
}

export default App;
