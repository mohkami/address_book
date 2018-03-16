import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectContact, editContact } from '../../actions'
import { Form, Text, Fieldset, Field, TextArea } from "react-form";
import {Row, Col, Alert} from 'react-bootstrap'
import './MainView.css'

const mapStateToProps = state => {
  return { 
    selectedContact: state.loadedSelectedContact.contact,
    loadSuccessful: state.loadedSelectedContact.successful,
    failErrorMessage: state.loadedSelectedContact.errorMessage,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitEdit: (contact) => dispatch(editContact(contact)),
    loadSelectedContact: (contactId) => dispatch(selectContact(contactId))
  }
}

class MainView extends Component {
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
    this.handleCancelForm = this.handleCancelForm.bind(this)
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
    this.props.submitEdit(editedContact)
  }

  handleCancelForm(event) {
    event.preventDefault()
    this.cancelEditMode()
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

    if(!this.props.loadSuccessful) {
      return this.buildErrorAlertTemplate(this.props.failErrorMessage);
    }

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

  buildErrorAlertTemplate(errorMessage) {
    return (
      <Alert className="main-view-container" bsStyle="danger">
        {errorMessage}
      </Alert>
    )
  }

  buildEmptyStateTemplate() {
    return (
      <div className="main-view-container">
        Please select a contact from the left menue.
      </div>
    )
  }

  buildEditModeTemplate() {
    const xsLeftCol = 3
    const xsRigtCol = 11 - xsLeftCol

    const leftCol = 2
    const rigtCol = 11 - leftCol

    return (
      <div className="main-view-container">
        <div className="contact-header">
          Edit Contact
        </div>
        <Form onSubmit={this.handleSubmit} defaultValues={this.props.selectedContact}>
          {formApi => (
              <form onSubmit={formApi.submitForm} id="editContactForm">
                <div>
                  <Row>
                    <Col xs={xsLeftCol} md={leftCol}>
                      First Name:
                    </Col>
                    <Col xs={xsRigtCol} md={rigtCol}>
                      <Text field="firstName" id="firstName" />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={xsLeftCol} md={leftCol}>
                      Last Name:
                    </Col>
                    <Col xs={xsRigtCol} md={rigtCol}>
                      <Text field="lastName" id="lastName" />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={xsLeftCol} md={leftCol}>
                      Phone:
                    </Col>
                    <Col xs={xsRigtCol} md={rigtCol}>
                      <Text field="phone" id="phone" />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={xsLeftCol} md={leftCol}>
                      Email:
                    </Col>
                    <Col xs={xsRigtCol} md={rigtCol}>
                      <Text field="email" id="email" />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={xsLeftCol} md={leftCol}>
                      Address:
                    </Col>
                    <Col xs={xsRigtCol} md={rigtCol}>
                      <TextArea field="address" id="address" />
                    </Col>
                  </Row>
                </div>
                <div>
                    <button onClick={this.handleCancelForm}>Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )}
        </Form>
      </div>
    )
  }
  
  buildReadOnlyModeTemplate() {
    const xsLeftCol = 3
    const xsRigtCol = 11 - xsLeftCol

    const leftCol = 2
    const rigtCol = 11 - leftCol

    return (
      <div className="main-view-container">
        <div className="edit-button-container">
          <button onClick={this.goToEditMode}> Edit </button>
        </div>
        <div className="contact-header">
          {this.props.selectedContact.firstName} {this.props.selectedContact.lastName}
        </div>
        <Row>
          <Col xs={xsLeftCol} md={leftCol}>
            Phone:
          </Col>
          <Col xs={xsRigtCol} md={rigtCol}>
            {this.props.selectedContact.phone}
          </Col>
        </Row>
        <Row>
          <Col xs={xsLeftCol} md={leftCol}>
            Email:
          </Col>
          <Col xs={xsRigtCol} md={rigtCol}>
            {this.props.selectedContact.email}
          </Col>
        </Row>
        <Row>
          <Col xs={xsLeftCol} md={leftCol}>
            Address:
          </Col>
          <Col xs={xsRigtCol} md={rigtCol}>
            {this.props.selectedContact.address}
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView)
