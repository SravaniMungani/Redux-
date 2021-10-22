//Using incr and decr handlers 
import React from 'react';
class Productp extends React.Component{
    constructor(props) {
        super(props);
this.state={
    product_name:"Vivo",
    price:'10000',
    image:"https://rukminim1.flixcart.com/image/312/312/ksj9dow0/mobile/g/p/s/y21-v2111-vivo-original-imag627u8gtzx9vs.jpeg?q=70",
    qty:1,
    Totalprice:'10000'
};
    }
decrHandler=()=>{
    this.setState({qty:this.state-1})
};
incrHandler=()=>{
    this.setState({qty:this.state+1})
};
render(){
    return <React.Fragment>
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <table className="table table-hover bg-white">
                    <thead>
                        <tr>
                            <th>product_name</th>
                            <th>price</th>
                            <th>image</th>
                            <th>qty</th>
                            <th>Total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.product_name}</td>
                            <td>{this.state.price}</td>
                            <td ><img src={this.state.image} alt="Vivo" height="70%" /></td>
                            <td>
                                <i className="fas fa-minus-circle" onClick={this.decrHandler} ></i>
                            {this.state.qty}
                            <i className="fas fa-plus-circle" onClick={this.incrHandler} ></i>
                            </td>
                            <td>{this.state.price * this.state.qty}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
                    </React.Fragment>
    }
}                   

export default Productp;
