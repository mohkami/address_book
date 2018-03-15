import constants from '../constansts'
import ContactsAPI from '../api/contacts'

// Exported action creator to load all contacts
export function loadAllContacts() {
    return function(dispatch) {
        return ContactsAPI.getAllContacts().then(response => {
            dispatch(loadContacts(response.data.contacts))
        }).catch(error => {
            throw(error)
        })
    }
}

// Exported action creator to search and load contacts using a search term
export function searchContacts(searchTerm='') {
    return function(dispatch) {
        return ContactsAPI.searchContacts(searchTerm).then(response => {
            dispatch(loadContacts(response.data.contacts))
        }).catch(error => {
            throw(error)
        })
    }
}

// Exported action creator to select a contact by id
export function selectContact(contactId) {
    return function(dispatch) {
        return ContactsAPI.getContactById(contactId).then(response => {
            dispatch(loadContact(response.data.contact))
        }).catch(error => {
            throw(error)
        })
    }
}

// Exported action creator to indicate the result of edit on a contact by id
export function editContact(newContactInfo){
    return function(dispatch) {
        return ContactsAPI.updateContactById(newContactInfo).then(response => {
            dispatch(editContactSuccessful(response.data.editContact))
        }).catch(error => {
            throw(error)
        })
    }
}

function loadContacts(contacts) {
    return {
        type: constants.LOAD_CONTACTS,
        payload: {
            contacts: contacts
        }
    }
}

function loadContact(contact){
    return {
        type: constants.LOAD_CONTACT,
        payload: {
            contact: contact
        }
    }
}

function editContactSuccessful(contact) {
    return {
        type: constants.EDIT_CONTACT,
        payload: {
            contact: contact
        }
    }
}
