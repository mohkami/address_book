import * as actions from '../../src/actions' 
import constants from '../../src/constansts'

describe('loadContact', () => {
  it('should create an action for failing at loading contact', () => {

    const res = actions.loadContactFailed()
    expect(res.type).toEqual(constants.LOAD_CONTACT)
    expect(res.payload.contact).toBeNull()
    expect(res.payload.successful).toBeFalsy()
    expect(res.payload.errorMessage).toEqual("Failed to load contact. Please try again.")

  })

  it('should create an action for successfully loading contact', () => {
    const contact = {
        contactId : 123,
        firstName : 'First Name'
    }
    const expectedContact = {
        contactId : 123,
        firstName : 'First Name'
    }

    const res = actions.loadContactSuccessful(contact)
    expect(res.type).toEqual(constants.LOAD_CONTACT)
    expect(res.payload.successful).toBeTruthy()
    expect(res.payload.errorMessage).toEqual('')
    expect(res.payload.contact.contactId).toEqual(expectedContact.contactId)
    expect(res.payload.contact.firstName).toEqual(expectedContact.firstName)
    expect(res.payload.contact.lastName).toEqual(expectedContact.lastName)
  })
})

describe('loadContacts', () => {
  it('should create an action for failing at loading contacts', () => {
    const expectedContacts = []

    const res = actions.loadContactsFailed()
    expect(res.type).toEqual(constants.LOAD_CONTACTS)
    expect(res.payload.successful).toBeFalsy()
    expect(res.payload.errorMessage).toEqual("Failed to load contacts. Please try again.")
    expect(res.payload.contacts).toEqual(expectedContacts)
  })

  it('should create an action for successfully loading contacts', () => {
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

describe('editContact', () => {
  it('should create an action for failing at editing the contact', () => {
    
    const res = actions.editContactFailed()
    expect(res.type).toEqual(constants.EDIT_CONTACT)
    expect(res.payload.contact).toBeNull()
    expect(res.payload.successful).toBeFalsy()
    expect(res.payload.errorMessage).toEqual('Failed to edit contact. Please try again.')
  })

  it('should create an action for successfully editing the contact', () => {
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
    expect(res.payload.successful).toBeTruthy()
    expect(res.payload.errorMessage).toEqual('')
    expect(res.payload.contact.contactId).toEqual(expectedEditContact.contactId)
    expect(res.payload.contact.firstName).toEqual(expectedEditContact.firstName)
    expect(res.payload.contact.lastName).toEqual(expectedEditContact.lastName)
  })
})