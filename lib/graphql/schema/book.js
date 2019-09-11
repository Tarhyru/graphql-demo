
const { gql } = require('apollo-server-koa');

const Book = gql(`
    type Book {
        id:ID
        date:String
        name:String
        author:String
    }

    type BookRes {
        success:Boolean!
        data:Book
    }

    input BookInput {
        name:String!
        author:String!
    }
    input editBookInput{
        id:ID!
        name:String
        author:String
    }


`)

module.exports = {
    types: [Book]
}