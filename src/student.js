import React from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg"; // assuming your React logo is logo.svg in src folder
import "./App.css"; // use existing styles or create your own

class Student extends React.Component {
  static defaultProps = {
    lnm: "No last name",
    result: "No Result",
    city: "Toronto",
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h2>Welcome to Fullstack Development - I</h2>
          <h3>React JS Programming Week09 Lab exercise</h3>

          <p>{this.props.sid}</p>
          <p>{this.props.fnm} {this.props.lnm}</p>

          <p>George Brown College, Toronto</p>
        </header>
      </div>
    );
  }
}

Student.propTypes = {
  sid: PropTypes.number,
  fnm: PropTypes.string.isRequired,
  lnm: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  city: PropTypes.string,
};

export default Student;
