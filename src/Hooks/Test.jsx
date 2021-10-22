//Hooks change the state using useState()
import React,{useState} from 'react';
function Test(){
    //declare a new state variable,which we'll call "count"
    let[count,setCount]=useState(0);
    return (
    <div>
        <p>{count}</p>
         <button onClick={()=>{setCount(count+2)}}>click</button>
         </div>

    )}
    export default Test;
