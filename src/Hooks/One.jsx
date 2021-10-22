//Hooks change the state using useState()
import React,{useState} from 'react';
let One=()=>{
 let [msg,setMsg]=useState(["xyz","abc"]);
 let updateHandler=()=>{
     setMsg("A to Z ");
 };
 return (<>
 <h1>One:{msg}</h1>
 <button onClick={updateHandler}>click</button>
 </>)
}
export default One;

