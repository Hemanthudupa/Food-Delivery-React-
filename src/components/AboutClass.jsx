import { Component } from "react";
import userContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count_1: 1,
    };
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-300 p-6">
        <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg w-full text-center">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">👨‍💻 About Us</h1>
          
          <p className="text-lg text-gray-700 mb-4">
            I am{" "}
            <b className="text-purple-800">
              <userContext.Consumer>
                {({ name }) => name}
              </userContext.Consumer>
            </b>{" "}
            and I am a <b className="text-purple-900">{this.props.role}</b>.
          </p>

          <p className="text-lg text-gray-600">
            We are a group of developers passionate about coding, and we love to 
            share our knowledge with the world. 🚀
          </p>

          {/* Uncomment if you want counter functionality */}
          {/* <div className="mt-6">
            <p className="text-lg">
              Count: <b className="text-purple-800">{this.state.count}</b>
            </p>
            <button
              className="px-6 py-2 bg-purple-500 text-white rounded-xl shadow-lg hover:bg-purple-600 transition transform hover:scale-105 mt-4"
              onClick={() => this.setState({ count: this.state.count + 1 })}
            >
              Increment Count
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}

export default About;
