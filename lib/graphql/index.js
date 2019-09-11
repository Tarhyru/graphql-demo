const { ApolloServer } = require('apollo-server-koa');
const types = require('./schema');
const resolvers = require('./controller');

const server = new ApolloServer({
    typeDefs: types,
    resolvers
})

module.exports = {
    makeGraphqMiddleware: server.getMiddleware.bind(server)
}
