const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./src/schema.js');
const db = require('./src/db.js');
var cors = require('cors')

let port = 8000;
const app = express();
cors({credentials: true, origin: true})
app.use(cors())
app.get('/', function (req, res) {
    let values = req.query.searchTerm.split(' ')
    res.send('{"contacts":'+JSON.stringify(values)+'}');
});
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(port);
console.log('GraphQL API server running at localhost:' + port);