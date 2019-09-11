
const bookList = require('./bookList');

module.exports = {
    Query: {
        ...bookList.Query
    },
    Mutation:{
        ...bookList.Mutation
    }
}