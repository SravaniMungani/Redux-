import React from "react";
class One extends React.Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props)}</pre>

        <h4>Product Name :{this.props.name}</h4>
        <h5>Color:{this.props.product_Color[0]}</h5>
        <h5>Hi</h5>
      </div>
    );
  }
}
export default One;