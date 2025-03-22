import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
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
      </div>
    );
  }
}

export default About;
