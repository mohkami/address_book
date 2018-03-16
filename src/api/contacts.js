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
                    lastName,
                    address,
                    email,
                    phone
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
                    lastName,
                    address,
                    email,
                    phone
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
                    lastName,
                    address,
                    email,
                    phone
                }
            }
            `,
            variables: { 
                contactId: contactId 
            }
          }
    }

    static buildUpdateContactByIdQuery(contact) {
        return {
            mutation: gql`
                mutation (
                    $contactId: Int,
                    $firstName: String,
                    $lastName: String,
                    $address: String,
                    $email: String,
                    $phone: String) {

                    editContact(
                        contactId: $contactId,
                        firstName: $firstName,
                        lastName: $lastName,
                        address: $address,
                        email: $email,
                        phone: $phone
                        ){
                        contactId,
                        firstName,
                        lastName,
                        address,
                        email,
                        phone
                    }
                }
            `,
            variables: { 
                contactId: contact.contactId,
                firstName: contact.firstName,
                lastName: contact.lastName,
                address: contact.address,
                email: contact.email,
                phone: contact.phone
            }
          }
    }

    static getAllContacts() {
        const query = ContactsAPI.buildGetAllContactsQuery()
        return ContactsAPI.queryGraphql(query)
    }

    static searchContacts(searchTerm) {
        const query = ContactsAPI.buildSearchContactsQuery(searchTerm)
        return ContactsAPI.queryGraphql(query)
    }
    
    static getContactById(contactId) {
        const query = ContactsAPI.buildGetContactByIdQuery(contactId)
        return ContactsAPI.queryGraphql(query)
    }
    
    static updateContactById(contact) {
        const query = ContactsAPI.buildUpdateContactByIdQuery(contact)
        return ContactsAPI.mutateGraphql(query)
    }

    static queryGraphql(query) {
        return graphQLClient.query(query)
        .then(data => data)
    }

    static mutateGraphql(query) {
        return graphQLClient.mutate(query)
        .then(data => data)
    }
}

export default ContactsAPI
