import React, { Component } from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './NavBar.css'
import SearchInput from 'react-search-input'
import { connect } from 'react-redux'
import { searchContacts, loadAllContacts, selectContact } from '../../actions'
import ListItemComponent from './ListItem'

const mapStateToProps = state => {
  return {
    contacts: state.allContacts
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    fetchAllContacts: () => dispatch(loadAllContacts()),
    searchContacts: searchTerm => dispatch(searchContacts(searchTerm)),
    selectContact: contactId => dispatch(selectContact(contactId))
  }
}

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.initializeState()
    this.bindListeners()
    this.loadAllContacts()
  }

  initializeState() {
    this.state = {
      searchTerm: ''
    }
  }

  bindListeners() {
    this.searchUpdated = this.searchUpdated.bind(this)
  }
  
  loadAllContacts() {
    this.props.fetchAllContacts()
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
    this.searchContacts()
  }

  searchContacts() {
    this.props.searchContacts(this.state.searchTerm)
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
            <LinkContainer key={contact.contactId} to={"/" + contact.contactId}>
              <ListGroupItem bsClass="list-group-item">
                <ListItemComponent contact={contact} />
              </ListGroupItem>
            </LinkContainer>
          ))
        }
        </ListGroup>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
