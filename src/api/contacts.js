import gql from 'graphql-tag';
import {graphQLClient} from '../graphql/client';

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

    static getAllContacts() {
        return graphQLClient.query(ContactsAPI.buildGetAllContactsQuery())
        .then(data => data)
        .catch(error => console.error(error));
    }

    static searchContacts(searchTerm) {
        const query = ContactsAPI.buildSearchContactsQuery(searchTerm)
        return graphQLClient.query(query)
        .then(data => data)
        .catch(error => console.error(error));
    }
}

export default ContactsAPI