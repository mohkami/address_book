import * as actions from '../../src/actions' 
import constants from '../../src/constansts'

describe('loadContact', () => {
  it('should create an action to load contact', () => {
    const contact = {
        contactId : 123,
        firstName : 'First Name'
    }
    const expectedContact = {
        contactId : 123,
        firstName : 'First Name'
    }
    const expectedAction = {
      type: constants.LOAD_CONTACT,
      payload: {
        contact: expectedContact
      }
    }

    const res = actions.loadContact(contact)
    expect(res.type).toEqual(constants.LOAD_CONTACT)
    expect(res.payload.contact.contactId).toEqual(expectedContact.contactId)
    expect(res.payload.contact.firstName).toEqual(expectedContact.firstName)
    expect(res.payload.contact.lastName).toEqual(expectedContact.lastName)
  })
})

describe('loadContactsSuccessful', () => {
  it('should create an action to load contacts', () => {
    const contacts = [{
        contactId : 123,
        firstName : 'First Name'
    }]
    const expectedContacts = [{
        contactId : 123,
        firstName : 'First Name'
    }]
    const expectedAction = {
      type: constants.LOAD_CONTACTS,
      payload: {
        contacts: expectedContacts
      }
    }

    const res = actions.loadContactsSuccessful(contacts)
    expect(res.type).toEqual(constants.LOAD_CONTACTS)
    expect(res.payload.contacts[0].contactId).toEqual(expectedContacts[0].contactId)
    expect(res.payload.contacts[0].firstName).toEqual(expectedContacts[0].firstName)
    expect(res.payload.contacts[0].lastName).toEqual(expectedContacts[0].lastName)
  })
})

describe('editContactSuccessful', () => {
  it('should create an action to edit the contact', () => {
    const contact = {
        contactId : 123,
        firstName : 'First Name'
    }
    const expectedEditContact = {
        contactId : 123,
        firstName : 'First Name'
    }
    const expectedAction = {
      type: constants.EDIT_CONTACT,
      payload: {
        contact: expectedEditContact
      }
    }
    const res = actions.editContactSuccessful(contact)
    expect(res.type).toEqual(constants.EDIT_CONTACT)
    expect(res.payload.contact.contactId).toEqual(expectedEditContact.contactId)
    expect(res.payload.contact.firstName).toEqual(expectedEditContact.firstName)
    expect(res.payload.contact.lastName).toEqual(expectedEditContact.lastName)
  })
})