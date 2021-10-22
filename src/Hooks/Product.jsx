//using useState-updadte the state
import React,{useState} from 'react';
let Product=()=>{
    let [thing,setThing]=useState({
        productname:"Vivo",
        price:10000,
        Image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQdydtQpLe_23uUQXgunx5TCX6LnHdouBkREp_xyPBDq1lgVcm__HW49jatsgrhBR5dhzyA01lCC2A&usqp=CAc",
        qty:1


    });
    return( <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-hover,table-dark,bg-dark">
                        <thead>
                            <th>productname</th>
                            <th>price</th>
                            <th>Image</th>
                            <th>qty</th>
                            <th>totalamount</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{thing.productname}</td>
                                <td>{thing.price}</td>
                                <td> 
                                    <img src={thing.Image}/>
                                </td>
                                <td><i class="fas fa-minus-circle" onclick={()=>{
                                    setThing({...thing,qty:thing.qty-1});
                                }}></i>
                                    {thing.qty}
                                    <i class="fas fa-plus-circle" onClick={()=>{
                                       setThing ({...thing,qty:thing.qty+1});
                                    }}></i>
                                </td>
                                <td>{thing.price * thing.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>);
}
export default Product;