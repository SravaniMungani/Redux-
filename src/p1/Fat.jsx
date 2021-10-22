import React from 'react';
import Data from "../Data";
class Fat extends React.Component{
  constructor(props){
    super(props);
    this.state={employees:Data};
  }
  render(){
    return <>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>loc</th>
              </tr>
            </thead>
            <tbody>{this.state.employees.map((emp)=>{
              return (<tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.loc}</td>
              </tr>)})
  }</tbody> 
          </table>
        </div>
      </div>
    </div>
    </>
  }


}
export default Fat;

