import React from 'react';
import Axios from 'axios';
class Product extends React.Component{
state={msg:[]};
getmsgCount=()=>{
    Axios.get("https://shopify.dev/apps/tools?ref=&campaignid=14878713248&adgroupid=123189359170&targetid=kwd-1473197615&creative=550282722462&device=c&keyword=rest%20api&utm_source=google&utm_medium=cpc&gclid=EAIaIQobChMI0KjZlKXT8wIVjYeRCh1ogwklEAAYASABEgKVOvD_BwE")
    .then((response)=>{
        this.setState({
            msg:response.data
        })
    })
    .catch(()=>{})
}
render(){
    return<><hr/>
     <h3>hi</h3>
    <button onClick={this.getmsgCount}>Click</button>
    
    </>
}
}
export default Product;