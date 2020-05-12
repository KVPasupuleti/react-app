import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable, action, computed } from "mobx";

@observer
export default class Index extends Component {
  @observable count = 7;
  @observable one = 1;
  @observable two = 2;
  @observable three = 3;
  @observable four = 4;
  @observable five = 5;

  componentDidMount() {
    this.updateOthers()
  }

@computed
get total() {
    console.log("computed called")
    const total = this.one + this.two + this.three + this.four + this.five
    return total 
}

updateOthers = () => {
    console.log("before 1")
    this.one = this.one + 1;
    console.log("before 2")
    this.two = this.two + 1;
    console.log("before 3")
    this.three = this.three + 1;
    console.log("before 4")
    this.four = this.four + 1;
    console.log("before 5")
    this.five = this.five + 1;
}


//   @action.bound
  onUpdate = () => {
    this.count = this.count - 30;
  }

  render() {
    return (
      <div>
        <p>Count: {this.count}</p>
        <p>Total: {this.total}</p>
        <button onClick={this.onUpdate}>Update</button>
      </div>
    );
  }
}

// export default Counter;