import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchContacts } from "../actions"

const mapStateToProps = state => {
  return { contacts: state.allContacts };
};

class Contact extends Component {

  constructor(props) {
    super(props);
    this.renderNoContactSelected = this.renderNoContactSelected.bind(this);
    this.renderSpecificContact = this.renderSpecificContact.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return this.props.match.params.id ? this.renderSpecificContact() : this.renderNoContactSelected() 
  }

  renderNoContactSelected() {
    return (
      <div>
        Please select a contact from the left menue.
      </div>
    )
  }

  renderSpecificContact() {
    return (
      <div>
        This is the contact view for : {this.props.match.params.id}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Contact)
