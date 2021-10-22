import React from "react";
import One from "../p1/One";

class Two extends React.Component {
  product_Name = "Iphone 5S";
  color = ["White", "Gray", "Black"];
  render() {
    return (
      <div>
        <One
          message="Good Morning"
          name={this.product_Name}
          product_Color={this.color}
        />
      </div>
    );
  }
}
export default Two;
