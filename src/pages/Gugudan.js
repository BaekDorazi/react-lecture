import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: Math.ceil(Math.random() * 9), //첫번째 랜덤 숫자
      second: Math.ceil(Math.random() * 9), //두번째 랜덤 숫자
      value: "", //
      result: "",
    };
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState({
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: "",
        result: "정답!",
      });
    } else {
      this.setState({
        value: "",
        result: "땡!!!!",
      });
    }
  };

  render() {
    const { first, second, value, result } = this.state;

    return (
      <div>
        <div>
          {first}곱하기 {second}는?
          <form onSubmit={this.onSubmit}>
            <input type="number" value={value} onChange={this.onChange} />
            <button>입력</button>
          </form>
          <div>{result}</div>
        </div>
      </div>
    );
  }
}

export default Home;