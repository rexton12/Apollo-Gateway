const {ApolloServer} = require('apollo-server');
const {ApolloGateway} = require('@apollo/gateway');
require('dotenv').config();
const { readFileSync } = require('fs');

const supergraphSchema = readFileSync('./supergraph.graphql').toString();

// Instance of the gateway
const gateway = new ApolloGateway({
  supergraphSdl: supergraphSchema
});


const server = new ApolloServer({gateway});

const port = process.env.PORT || 4000;

server
.listen(port)
.then(({url}) => {
    console.log(`🚀 Server started ready at ${url}`);
  })
  .catch(err => {
    console.error(err);
  });