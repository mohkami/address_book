import constants from '../constansts'
import { combineReducers }  from 'redux'

const defaultLoadedContactsState = {
    contacts: [],
    successful: true,
    errorMessage: ""
}

export const loadedContacts = (state=defaultLoadedContactsState, action) => {
    
    switch(action.type) {
        case constants.LOAD_CONTACTS:
            return action.payload
        default:
            return state
    }
}

const defaultLoadedSelectedContactState = {
    contact: null,
    successful: true,
    errorMessage: ""
}

export const loadedSelectedContact = (state=defaultLoadedSelectedContactState, action) => {
    switch(action.type) {
        case constants.LOAD_CONTACT:
            return action.payload
        case constants.EDIT_CONTACT:
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    loadedContacts,
    loadedSelectedContact
})
