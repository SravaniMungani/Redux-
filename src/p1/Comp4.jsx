import React from 'react';
import Comp5 from './Comp5';
class Comp4 extends React.Component{
    let Product_Name="Iphone";
    let Color=['white','gray'];
    render(){
        return <div>
            <Comp5 one={Product_Name}
            two={Color}/></div>
    }
}
export default Comp4;
