import constants from '../constansts'
import ContactsAPI from '../api/contacts'

// Exported action creator to load all contacts
export function loadAllContacts() {
    return function(dispatch) {
        ContactsAPI.getAllContacts().then(response => {
            dispatch(loadContactsSuccessful(response.data.contacts))
        }).catch(error => {
            dispatch(loadContactsFailed())
        })
    }
}

// Exported action creator to search and load contacts using a search term
export function searchContacts(searchTerm='') {
    return function(dispatch) {
        ContactsAPI.searchContacts(searchTerm).then(response => {
            dispatch(loadContactsSuccessful(response.data.contacts))
        }).catch(error => {
            dispatch(loadContactsFailed())            
        })
    }
}

// Exported action creator to select a contact by id
export function selectContact(contactId) {
    return function(dispatch) {
        ContactsAPI.getContactById(contactId).then(response => {
            dispatch(loadContactSuccessful(response.data.contact))
        }).catch(error => {
            dispatch(loadContactFailed())
        })
    }
}

// Exported action creator to indicate the result of edit on a contact by id
export function editContact(newContactInfo){
    return function(dispatch) {
        ContactsAPI.updateContactById(newContactInfo).then(response => {
            dispatch(editContactSuccessful(response.data.editContact))
        }).catch(error => {
            dispatch(editContactFailed())
        })
    }
}

export function loadContactsSuccessful(contacts) {
    return {
        type: constants.LOAD_CONTACTS,
        payload: {
            contacts: contacts,
            successful: true,
            errorMessage: ""
        }
    }
}

export function loadContactsFailed() {
    return {
        type: constants.LOAD_CONTACTS,
        payload: {
            contacts: [],
            successful: false,
            errorMessage: "Failed to load contacts. Please try again."
        }
    }
}

export function loadContactSuccessful(contact){
    return {
        type: constants.LOAD_CONTACT,
        payload: {
            contact: contact,
            successful: true,
            errorMessage: ""
        }
    }
}

export function loadContactFailed(contact){
    return {
        type: constants.LOAD_CONTACT,
        payload: {
            contact: null,
            successful: false,
            errorMessage: "Failed to load contact. Please try again."
        }
    }
}

export function editContactSuccessful(contact) {
    return {
        type: constants.EDIT_CONTACT,
        payload: {
            contact: contact,
            successful: true,
            errorMessage: ""
        }
    }
}

export function editContactFailed() {
    return {
        type: constants.EDIT_CONTACT,
        payload: {
            contact: null,
            successful: false,
            errorMessage: "Failed to edit contact. Please try again."
        }
    }
}
