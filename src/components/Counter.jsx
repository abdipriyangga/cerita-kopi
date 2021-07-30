import React, { Component } from "react";

class Counter extends Component {
  
  state = {
    number: 0,
    error: ""
  }
  
  handleCounterChangeMinus = () => {
    if (this.state.number <= 0) {
      // window.alert("Number must be greater than 0")
      this.setState({ error: "Number must be greater than 0" });
    }
    else {
      this.setState({ number: this.state.number - 1, error: "" });
    }
  }

  handleCounterChangePlus = () => {
    if (this.state.number >= 10) {
      this.setState({ error: "Number must be less than 10" });
    }
    else {
      this.setState({ number: this.state.number + 1, error: "" });
    }
  }

  componentDidMount() {
    console.log("component did mount berjalan");
    console.log(this.state);
  }
  componentDidUpdate() {
    console.log("component did update berjalan");
    console.log(this.state);
  }
  render() {
    return (
      <>
        <div className="space-x-5 mt-6 ml-28">
          <button className="focus:outline-none text-black font-bold text-lg bg-yellow-400 py-2 rounded-full w-10 h-10" onClick={this.handleCounterChangeMinus}>-</button>
          <span className="text-lg font-bold">{this.state.number}</span>
          <button className="focus:outline-none text-black font-bold text-lg bg-yellow-400 py-2 rounded-full w-10 h-10" onClick={this.handleCounterChangePlus}>+</button>
          <p>{this.state.error}</p>
        </div>
      </>
    );
  }
}
export default Counter;