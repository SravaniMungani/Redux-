import React from 'react';
function Comp2(props){
    return <div>
        <h1>component-two:{props.x}**{props.y}</h1>
        <pre>{JSON.stringify(props)}</pre>
         </div>
}
export default Comp2;
 