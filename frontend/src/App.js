import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Propiedad from './views/propiedades/propiedades.js';
import EditPropiedad from './views/propiedades/edit/edit.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Propiedad></Propiedad>
      </div>
    );
  }
}

export default App;
