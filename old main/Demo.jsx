import React, { Component } from "react";
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      box: {},
    };
  }

  onChange(demo, event) {
    let data = this.state.data;
    data[demo] = event.target.value;
    this.setState({ box: data });
  }
  onClick = () => {
    let data  = JSON.stringify(this.state.box);
    alert("dyhht reg regh");
  };

  render() {
    const { box } = this.state;

    return (
      <div>
        <input type="text" defaultValue={box.firstName} disabled={true} />
        <input type="text" defaultValue={box.lastName} disabled={true} />
        <br></br>

        <label>First Name:</label>
        <input
          name="firstName"
          type="text"
          placeholder="anything"
          onChange={(e) => this.onChange("firstName", e)}
          //   value={data.firstName}
        ></input>
        <br></br>
        <label>last Name:</label>
        <input
          name="lastName"
          type="text"
          placeholder="anything"
          onChange={(e) => this.onChange("lastName", e)}
          //   value={data.lastName}
        ></input>
        <br></br>
        <button onClick={this.onClick}>press</button>
      </div>
    );
  }
}

export default Demo;
