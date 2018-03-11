import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import Contact from './contact/Contact';
import {Row, Col} from 'react-bootstrap'
import {Route} from 'react-router-dom'


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
