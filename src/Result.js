import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <h2>Your CPS: <strong>{this.props.cps}</strong></h2>
    );
  }
}

export default Result;
