import React from 'react';
class Reacthandling extends React.Component{
state={Name:"",
       email:"",
       id:"",
      
   
}
updateform=(x)=>{
    this.setState({
        [x.target.name]:x.target.value
                  })
} 
render(){
    return <>
    <pre>{JSON.stringify(this.state)}</pre>
    
     <form>
         <div style={{backgroundimage="https://ppo.kseb.in/ksebpp/themes/assets_login/img/backgrounds/1.jpg"}}></div>
         
         <label>Name:</label>
         <input type="text" name="Name" onChange={this.updateForm} /><br/><br/>
         <label>email:</label>
         <input type="text" name="email" onChange={this.updateForm}/><br/><br/>
         <label>id:</label>
         <input type="number" name="id" onchange={this.updateForm}/><br/><br/>
         <input type="radio"/><label>Male</label>
         <input type="radio"/><label>Female</label><br/><br/>
         <input type="checkbox"/>
         <spam>Terms&conditions are accepted</spam><br/><br/>
         <button>submit</button>
         
     </form>
    </>
}     
}
export default Reacthandling;