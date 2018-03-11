import React, { Component } from 'react';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.renderNoContactSelected = this.renderNoContactSelected.bind(this);
    this.renderSpecificContact = this.renderSpecificContact.bind(this);
  }

  render() {
    return this.props.match.params.id ? this.renderSpecificContact() : this.renderNoContactSelected() 
  }

  renderNoContactSelected() {
    return (
      <div>
        Please select a contact from the left menue
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

export default Contact;
