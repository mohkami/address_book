import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import {Route} from 'react-router-dom'
import NavBarComponent from './navbar/NavBar'
import MainViewComponent from './main_view/MainView'
import './App.css'

class App extends Component {
  render() {
    return (
    <Row className="main-container">
      <Col className="navbar-col" xs={3} md={3}>
        <Route path="/:id?" component={NavBarComponent}/>
      </Col>
      <Col className="contact-col" xs={9} md={9}>
        <Route path="/:id?" component={MainViewComponent}/>
      </Col>
    </Row>
    );
  }
}

export default App
