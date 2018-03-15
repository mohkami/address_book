import gql from 'graphql-tag'
import {graphQLClient} from '../graphql/client'

class ContactsAPI {

    static buildGetAllContactsQuery() {
        return{
            query: gql`
              query {
                contacts{
                    contactId,
                    firstName,
                    lastName
                }
            }
            `,
          }
    }

    static buildSearchContactsQuery(searchTerm='') {
        return {
            query: gql`
              query ($searchTerm: String) {
                contacts(keyword: $searchTerm){
                    contactId,
                    firstName,
                    lastName
                }
            }
            `,
            variables: { 
                searchTerm: searchTerm 
            }
          }
    }

    static buildGetContactByIdQuery(contactId) {
        return {
            query: gql`
              query ($contactId: Int) {
                contact(id: $contactId){
                    contactId,
                    firstName,
                    lastName
                }
            }
            `,
            variables: { 
                contactId: contactId 
            }
          }
    }

    static buildUpdateContactByIdQuery(contactId, firstName, lastName) {
        return {
            mutation: gql`
                mutation ($contactId: Int, $firstName: String, $lastName: String) {
                    editContact(contactId: $contactId,firstName: $firstName,lastName: $lastName){
                        contactId,
                        firstName,
                        lastName
                    }
                }
            `,
            variables: { 
                contactId: contactId,
                firstName: firstName,
                lastName: lastName
            }
          }
    }

    static getAllContacts() {
        return graphQLClient.query(ContactsAPI.buildGetAllContactsQuery())
        .then(data => data)
        .catch(error => console.error(error))
    }

    static searchContacts(searchTerm) {
        const query = ContactsAPI.buildSearchContactsQuery(searchTerm)
        return graphQLClient.query(query)
        .then(data => data)
        .catch(error => console.error(error))
    }
    
    static getContactById(contactId) {
        const query = ContactsAPI.buildGetContactByIdQuery(contactId)
        return graphQLClient.query(query)
        .then(data => data)
        .catch(error => console.error(error))
    }
    
    static updateContactById(contactId, firstName, lastName) {
        const query = ContactsAPI.buildUpdateContactByIdQuery(contactId, firstName, lastName)
        return graphQLClient.mutate(query)
        .then(data => data)
        .catch(error => console.error(error))
    }
}

export default ContactsAPI
