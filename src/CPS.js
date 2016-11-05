import React, { Component } from 'react';
import Result from './Result';
import './CPS.css';

class CPS extends Component {
  constructor(props) {
    super(props);
    this.state = { cpsText: '', cps: 0 }
    this.tsStart = 0;
  }

  getCPS() {
    this.setState({
      cps: (this.state.cpsText.length / ((Date.now() - this.tsStart) / 1000)).toFixed(3),
      cpsText: ''
    }); 
  }

  handleTextChange = (e) => {
    if (e.target.value.length === 1) {
      this.tsStart = Date.now();
      this.setState({ cps: 0 })
    }

    this.setState({ cpsText: e.target.value });
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13 && this.state.cpsText.length > 0) {
      this.getCPS();
    }    
  }

  render() {
    return (
      <div className="cps">
        <input
          type="text"
          value={this.state.cpsText}
          onChange={this.handleTextChange}
          onKeyDown={this.handleKeyDown}
          placeholder="Type in a word and press Enter" />
        
        <Result cps={this.state.cps} />
      </div>
    );
  }
}

export default CPS;
