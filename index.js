import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Hello from './Hello';
import Calculation from './Calculation'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'HRA CALCULATOR'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Calculation/>
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
