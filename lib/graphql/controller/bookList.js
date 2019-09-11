
const { getBookList, addBook,editBook,deleteBook } = require('../../model/bookListOperation')


module.exports = {
    Query: {
        bookList: function () {
            return getBookList();
        }
    },
    Mutation: {
        addBook: function (obj, arg, content) {
            let data = addBook(arg.parame);
            let bookRes = {
                success: true,
                data
            }
            return bookRes
        },
        editBook: function (obj, arg, content) {
            let bookRes = {
                success: editBook(arg.parame)
            }
            return bookRes
        },
        delBook: function (obj, arg, content) {
            let bookRes = {
                success: deleteBook(arg.id),
            }
            return bookRes
        }
    }
}