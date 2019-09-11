
const { gql } = require('apollo-server-koa');
const Book = require('./book');



const Main = gql(`
    type Query{
        bookList:[Book]
    }
    type Mutation{
        addBook(parame:BookInput):BookRes
        editBook(parame:editBookInput):BookRes
        delBook(id:ID!):BookRes

    }
`)
let types = [Main,...Book.types];


module.exports = types;

