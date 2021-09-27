//react props-fc to fc
import React from 'react';
import Comp2 from "../p1/Comp2";
function Comp1(){
    let Name="Rama";
    let Age='22';
    return <div>
        <h1 style={{backgroundColor:"yellowgreen"}}>Functional-compnents to Functional-compnents</h1>
        <Comp2 x={Name} y={Age}/>
        </div>

}
export default Comp1;


