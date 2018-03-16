import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import {Route, withRouter} from 'react-router-dom'
import NavBarComponent from './navbar/NavBar'
import MainViewComponent from './main_view/MainView'
import './App.css'

export class App extends Component {
  render() {
    return (
    <Row className="main-container">
      <Col className="navbar-col" xs={4} md={4}>
        <Route path="/:id?" component={NavBarComponent}/>
      </Col>
      <Col className="contact-col" xs={8} md={8}>
        <Route path="/:id?" component={MainViewComponent}/>
      </Col>
    </Row>
    );
  }
}

export default withRouter(App)
