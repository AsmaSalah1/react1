import Navbar from "./componants/navbar/Navbar"
import './App.css'
import { useState } from "react";

function App() {
  let [count,setCount]=useState(0);
const changeCount = ()=>{
setCount(count+1);
}
 return (
  <>
          <button onClick={changeCount}>asma {count}</button>
  
  </>
  

 )
}

export default App
