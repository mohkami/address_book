class ContactsAPI {
    static getAllContacts() {
        return fetch('http://localhost:8000/').then(response => {
            return response.json();
        }).catch(error => {
        return error;
    })}

    static searchContacts(searchTerm) {
        return fetch('http://localhost:8000/?searchTerm='+searchTerm).then(response => {
            return response.json();
        }).catch(error => {
        return error;
    });
}}

export default ContactsAPI