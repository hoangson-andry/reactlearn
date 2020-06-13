import React, { Component } from "react";

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };
  }
  componentDidMount() {
    const color = document.querySelector("#go");
    color.style.color = "red";
  }

  handleInputChange = (e) => {
    const value =
      e.target.name === "isGoing" ? e.target.checked : e.target.value;
    // console.log("iagoing", {
    //   1: value,
    //   2: e.target.name,
    //   3: e.target.checked,
    //   4: e.target.value,
    // });
    const name = e.target.name;
    const number = e.target.value;
    this.setState({
      [name]: value,
      numberOfGuests: number,
    });
  };
  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <label id="go">
            Is Going :
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Reservation;
