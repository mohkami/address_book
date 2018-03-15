import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectContact, editContact } from '../../actions'
import { Form, Text, Fieldset, Field } from "react-form";

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
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
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
    this.setState({selectedContact: nextProps.selectedContact})
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

  handleSubmit(editedContact) {
    this.cancelEditMode()
    this.props.submitEdit(this.props.selectedContact.contactId, editedContact)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const editMode = this.state.editMode

    // Default: Empty state
    let template = this.buildEmptyStateTemplate()

    // Edit mode 
    if (this.props.selectedContact && editMode) {
      template = this.buildEditModeTemplate()
    }
    // Read-only mode 
    else if (this.props.selectedContact) {
      template = this.buildReadOnlyModeTemplate()
    }
    return template
  }

  buildEmptyStateTemplate() {
    return (
      <div>
        Please select a contact from the left menue.
      </div>
    )
  }

  buildEditModeTemplate() {
    const initialValue = {firstName:"Mohsen"}
    return (
      <Form onSubmit={this.handleSubmit} defaultValues={this.props.selectedContact}>
        {formApi => (
          <form onSubmit={formApi.submitForm} id="form2">
            <label htmlFor="firstName">First name</label>
            <Text field="firstName" id="firstName" />

            <label htmlFor="lastName">Last name</label>
            <Text field="lastName" id="lastName" />

            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    )
  }
  
  buildReadOnlyModeTemplate() {
    return (
      <div>
        This is the contact view for : {this.props.selectedContact.contactId} : {this.props.selectedContact.firstName} , {this.props.selectedContact.lastName}
        <button onClick={this.goToEditMode}> Edit </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainViewComponent)
