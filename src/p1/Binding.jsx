//Event-Binding
import React from 'react';
class Binding extends React.Component{
  constructor(props){
      super(props);
          this.state={price:100}
      }
      updatePrice=(a,b,c,d)=>{
          this.setState({price:a,b,c,d})
      }
      render(){
          return (<React.Fragment>
          <h1>{this.state.price}</h1>
          <button onClick={this.updatePrice.bind(this,200)}>Number</button>
          <button onClick={this.updatePrice.bind(this,"abc")}>String</button>
          <button onClick={this.updatePrice.bind(this,[1,2])}>Array</button>
          <button onClick={this.updatePrice.bind(this,{Name:"Ramu"})}>Object</button>
          </React.Fragment>
          )
      }
  }
export default Binding;
