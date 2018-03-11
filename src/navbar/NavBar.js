import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './NavBar.css'
import SearchInput from 'react-search-input'

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }

  render() {
    return (
      <div>
        <div>
          This is the Nav Bar
        </div>
        <div>
        <SearchInput throttle={500} className="search-input" onChange={this.searchUpdated} />
        </div>
        <ListGroup>
          <LinkContainer to="/1">
            <ListGroupItem bsClass="list-group-item">
              Contact 1
            </ListGroupItem>
          </LinkContainer>

          <LinkContainer to="/2">
            <ListGroupItem bsClass="list-group-item">
              Contact 2
            </ListGroupItem>
          </LinkContainer>
        </ListGroup>
      </div>
    );
  }
}

export default NavBar
