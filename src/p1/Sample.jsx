//EventHandling
import React from 'react';
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={counter:2}
    };
    incrHandler(){
        this.setState({counter:100})
    }
    render(){
        return(
          <React.Fragment>
              <h2>{this.state.counter}</h2>
              <button onClick={()=>{this.incrHandler()}}>
              incrHandler</button>
          </React.Fragment>)     
    
    }
}
export default Counter;
