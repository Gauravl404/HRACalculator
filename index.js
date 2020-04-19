import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Hello from './Hello';
import Calculation from './Calculation'
import Button from '@material-ui/core/Button';
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
      <div className="root">
        <Hello name={this.state.name} />
        <Calculation/>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
