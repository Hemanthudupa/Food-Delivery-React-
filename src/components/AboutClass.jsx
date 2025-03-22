import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count_1: 1,
    };
  } // this is optional
  render() {
    return (
      <div className="about">
        <h1>About Us</h1>
        <p>
          i am <b>{this.props.name}</b> and i am a <b>{this.props.role}</b>
        </p>
        <p>
          We are a group of developers who are passionate about coding and we
          love to share our knowledge with the world.
        </p>
        {/* <p>
          {this.state.count} is the count0{" "}
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            click me{" "}
          </button>
        </p>
        <p>
          {this.state.count_1} is the count1 <button>click me </button>
        </p> */}
      </div>
    );
  }
}

export default About;
