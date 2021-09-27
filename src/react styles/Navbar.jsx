import React from 'react';
import "./One.css";
class Navbar extends React.Component{
    render(){
        let x={backgroundColor:"pink"};
        return (<div>
            <h1 style={{backgroundColor:"yellow"}}>Inline</h1>
            <h2 style={x}>internal</h2>
            <h3 className="abc">application layer</h3>
            <h4>External</h4>
           
        </div>);


    }
}
export default Navbar;




