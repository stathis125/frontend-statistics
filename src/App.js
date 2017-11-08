import React, { Component } from 'react';
import Grommet from 'grommet';
import Employee from './Employee';
import logo from './logo.svg';
import 'grommet/grommet.min.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <Grommet.App>
        <Header />
        <Employee />
      </Grommet.App>
    );
  }
}

export default App;