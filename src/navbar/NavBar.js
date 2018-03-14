import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './NavBar.css'
import SearchInput from 'react-search-input'
import { connect } from "react-redux";
import { fetchContacts } from "../actions"

const mapStateToProps = state => {
  return { contacts: state.allContacts };
};

const mapDispatchToProps = dispatch => {
  return { 
    fetchContacts: searchTerm => dispatch(fetchContacts(searchTerm))
  };
};

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  searchUpdated (term) {
    this.props.fetchContacts(term)
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
        {
          this.props.contacts.map(contact => (
            <LinkContainer key={contact.firstName} to={"/" + contact.contactId}>
              <ListGroupItem bsClass="list-group-item">
              {contact.lastName}, {contact.firstName}
              </ListGroupItem>
            </LinkContainer>
          ))
        }
        </ListGroup>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
