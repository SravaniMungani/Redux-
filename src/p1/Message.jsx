//state update using js Events
import React from 'react';
class Message extends React.Component{
    state={data:"Hi guys"};
    updateData =() => {
        this.setState({ data: "Good Morning" });
      };
      updateHandler = () => {
        this.setState({ data: "Good Night.. sweet React Dreams" });
      };
    
   
   
   
    render(){
        return <>
        <h3>{this.state.data}</h3>
        <button onClick={this.updateData}>GM</button>
        <button onClick={this.updateHandler}>GN</button>        
        </>
    };    
    
}
export default Message;