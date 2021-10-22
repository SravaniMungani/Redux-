import React from 'react';
class Comp5 extends React.Component{
    render(){
        return <div>
            <px>{JSON.stringify(this.props)}</px>
            <h1>{this.props.one}</h1>
            <h2>{this.props.two}</h2>
        </div>
    }
}
export default Comp5;
