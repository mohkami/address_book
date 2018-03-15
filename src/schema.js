let {
    // These are the basic GraphQL types need in this tutorial
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
} = require('graphql');
  
const Db = require('./db.js');

const Contact = new GraphQLObjectType({
    name: 'Contact',
    fields: () => {
        return {
            contactId: {
                type: GraphQLInt,
                resolve(contact) {
                    return contact.contactId;
                }
            },
            firstName: {
                type: GraphQLString,
                resolve(contact) {
                    return contact.firstName;
                }
            },
            lastName: {
                type: GraphQLString,
                resolve(contact) {
                    return contact.lastName;
                }
            },
            email: {
                type: GraphQLString,
                resolve(contact) {
                    return contact.email;
                }
            },
            phone: {
                type: GraphQLString,
                resolve(contact) {
                    return contact.phone;
                }
            },
            address: {
                type: GraphQLString,
                resolve(contact) {
                    return contact.address;
                }
            }
        }
    }
}
);

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            contact: {
                type: Contact,
                args: {
                    id: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args) {
                    return Db.models.contact
                    .findById(args.id) 
                }
            },
            contacts: {
                type: new GraphQLList(Contact),
                args: {
                    keyword: {
                        type: GraphQLString
                    }
                },
                resolve(root, args) {
                    if (args.keyword) {
                        query = {
                            $or: {
                                firstName: {
                                  $like: '%' + args.keyword + '%'
                                },
                                lastName: {
                                  $like: '%' + args.keyword + '%'
                                }
                              }
                         } 
                        }
                    else {
                        query = {}
                    }

                    return Db.models.contact
                    .findAll({ where: query});
                }
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields() {
        return {
            editContact: {
                type: Contact,
                args: {
                    contactId: {
                        type: GraphQLInt
                    },
                    firstName: {
                        type: GraphQLString
                    },
                    lastName: {
                        type: GraphQLString
                    }
                },
                resolve(_, args) {
                    return Db.models.contact
                    .findById(args.contactId)
                    .then((contact) => {
                      return contact.update({ firstName: args.firstName, lastName: args.lastName});
                    });
                }
            }
        }
    }
});

const Schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});
module.exports = Schema;