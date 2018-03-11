const ContactsSamples = require('./data/contacts.js');
const Sequelize = require('sequelize');
const _ = require('lodash');
const Faker = require('faker');
const Configs = require('./../config.js');

const Conn = new Sequelize(Configs.mysql_db.database, Configs.mysql_db.user, Configs.mysql_db.password, {
    dialect: 'mysql',
    host: Configs.mysql_db.host,
    port: Configs.mysql_db.port,
});

const Contact = Conn.define('contact', {
    contactId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    address: Sequelize.STRING,
    phone: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    }
});

Conn.sync({force: true}).then(()=>{
    ContactsSamples.forEach(contact => Contact.create({
                firstName: contact.firstname,
                lastName: contact.lastname,
                email: contact.email,
                address: contact.address,
                phone: contact.phone
            }
        )
    );
});

module.exports = Conn;