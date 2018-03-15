import constants from '../constansts'
import { combineReducers }  from 'redux'


export const allContacts = (state=[], action) => {
    switch(action.type) {
        case constants.LOAD_CONTACTS:
            return action.payload.contacts
        default:
            return state
    }
}

export const selectedContact = (state=null, action) => {
    switch(action.type) {
        case constants.LOAD_CONTACT:
            return action.payload.contact
        case constants.EDIT_CONTACT:
            return action.payload.contact
        default:
            return state
    }
}

export default combineReducers({
    allContacts,
    selectedContact
})
