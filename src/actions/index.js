import constants from "../constansts"
import ContactsAPI from "../api/contacts"

export function fetchContacts(searchTerm='') {  
    return function(dispatch) {
        return ContactsAPI.searchContacts(searchTerm).then(response => {
            dispatch(loadContacts(response.contacts));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadContacts(contacts) {
    return {
        type: constants.FETCH_CONTACTS,
        payload: {
            contacts: contacts
        }
    }
}
