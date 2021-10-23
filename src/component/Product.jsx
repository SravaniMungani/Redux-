import React from 'react';
import {incrAction,decrAction} from '../redux/Product.action';
import {useDispatch,useSelector} from "react-redux";
let Product=()=>{
    let dispatch=useDispatch();
    let Product=useSelector((state)=>{
        return state.Product;
    });
   /* let incrHandler=()=>{

    };
    let decrHandler=()=>{};*/
    return<div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover table-dark bg-dark">
                        <thead>
                            <th>productname</th>
                            <th>price</th>
                            <th>image</th>
                            <th>qty</th>
                            <th>Totalamount</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{Product.productname}</td>
                                <td>{Product.price}</td>
                                <td>
                                <img src={Product.image} height="30%"  width="20%"/></td>
                                <td><i
                      class="fas fa-minus-circle"
                      onClick={() => {
                        dispatch(decrAction());
                      }}
                    ></i>
                                

                                    {Product.qty}
                                    <i
                      class="fas fa-plus-circle"
                      onClick={() => {
                        dispatch(incrAction());
                      }}
                    ></i>
                                    
                                </td>
                                <td>{Product.price * Product.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
}
export default Product;