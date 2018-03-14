import constants from '../constansts';
import { combineReducers }  from 'redux';


export const allContacts = (state=[], action) => {
    switch(action.type) {
        case constants.FETCH_CONTACTS:
            return action.payload.contacts;
        default:
            return state;
    }
}

export default combineReducers({
    allContacts
})