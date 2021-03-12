import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class App extends Component {
  handleIncrementClick = (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    dispatch(increment());
  };
  handleDecrementClick = (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    dispatch(decrement());
  };

  render() {
    return (
      <div>
        <div>
          <p>Display page {this.props.counter}</p>
          <button onClick={this.handleDecrementClick}>Decrement</button>
          <button onClick={this.handleIncrementClick}>Increment</button>
        </div>
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
