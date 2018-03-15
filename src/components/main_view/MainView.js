import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectContact, editContact } from '../../actions'

const mapStateToProps = state => {
  return { 
    selectedContact: state.selectedContact
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitEdit: (contactId, contact) => dispatch(editContact(contact.contactId, contact)),
    loadSelectedContact: (contactId) => dispatch(selectContact(contactId))
  }
}

class MainViewComponent extends Component {

  constructor(props) {
    super(props);
    this.initializeState()
    this.bindListeners()
  }

  initializeState() {
    this.state = {
      editMode: false
    }
  }

  bindListeners() {
    this.goToEditMode = this.goToEditMode.bind(this)
    this.cancelEditMode = this.cancelEditMode.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
  }

  componentDidMount () {
    let contactId = this.props.match.params.id
    if (contactId) {
      this.setContactToPopulate(contactId)      
    }
  }

  componentWillReceiveProps(nextProps){
    let contactId = nextProps.match.params.id
    if (contactId && contactId !==  this.state.selectedId) {
      this.cancelEditMode()
      this.setContactToPopulate(contactId)
    }
  }

  setContactToPopulate(contactId) {
    this.props.loadSelectedContact(contactId)
    this.setState({selectedId: contactId})
  }

  goToEditMode() {
    this.setState({editMode: true})
  }

  cancelEditMode() {
    this.setState({editMode: false})
  }

  submitEdit() {
    this.cancelEditMode()
    const newContactInfo = {
      contactId: this.props.selectedContact.contactId,
      firstName: "workin",
      lastName: "werkin",
    }
    
    this.props.submitEdit(this.props.selectedContact.contactId, newContactInfo)
  }

  render() {
    const editMode = this.state.editMode
    return this.props.selectedContact ? this.renderContact(editMode) : this.renderNoContactSelected(editMode) 
  }

  renderNoContactSelected(editMode) {
    return (
      <div>
        Please select a contact from the left menue.
      </div>
    )
  }

  renderContact(editMode) {
    return (
      <div>
        {editMode &&
        <h2>
          In Edit Mode
        </h2>
        }
        This is the contact view for : {this.props.selectedContact.contactId} : {this.props.selectedContact.firstName} , {this.props.selectedContact.lastName}
        {editMode ? 
          (<div>
            <button onClick={this.cancelEditMode}> Cancel </button>
            <button onClick={this.submitEdit}> Submit </button>
          </div>)
          :
          (<button onClick={this.goToEditMode}> Edit </button>)
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainViewComponent)
