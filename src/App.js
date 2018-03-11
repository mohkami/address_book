import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import Contact from './contact/Contact';
import {Row, Col} from 'react-bootstrap'
import {Route} from 'react-router-dom'


// <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>

class App extends Component {
  render() {
    return (
    <Row className="main-container">
      <Col className="navbar-col" xs={3} md={3}>
        <NavBar />
      </Col>
      <Col className="contact-col" xs={9} md={9}>
        <Route path="/:id?" component={Contact}/>
      </Col>
    </Row>
    );
  }
}

export default App;
