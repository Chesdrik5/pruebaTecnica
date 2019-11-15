import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Propiedad from './views/propiedades/propiedades.js';
import EditPropiedad from './views/propiedades/edit/edit.js';
import NavBar from './components/nav/nav.js';
import Tabla from './components/table/table.js';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Tabla></Tabla>
        <Button outline color="primary" onClick={this.loadAll}>primary</Button>
      </div>
    );
  }
}

export default App;
