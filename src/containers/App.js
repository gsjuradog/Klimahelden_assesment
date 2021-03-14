import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { increment, decrement } from "../actions";

class App extends Component {
  // handleIncrementClick = (e) => {
  //   e.preventDefault();

  //   const { dispatch } = this.props;
  //   dispatch(increment());
  // };
  // handleDecrementClick = (e) => {
  //   e.preventDefault();

  //   const { dispatch } = this.props;
  //   dispatch(decrement());
  // };

  render() {
    console.log(process.env.REACT_APP_DUMMY_KEY)
    return (
      <div>
        <h1>hola</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { counter } = state;

  return {
    counter
  };
};

export default connect(mapStateToProps)(App);
