import React, {Component} from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    selectedContact: state.selectedContact
  }
}

class ListItem extends Component {
  constructor (props) {
    super(props)
    this.initializeState()
  }

  initializeState() {
    this.state = {contact: this.props.contact}
  }

  componentWillReceiveProps(nextProps){
    let selectedContact = nextProps.selectedContact

    if (selectedContact.contactId === this.state.contact.contactId) {
      this.setState({contact: selectedContact})
    }
  }

  render() {
    return (
      <div>
        {this.state.contact.firstName}, {this.state.contact.lastName}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ListItem)
