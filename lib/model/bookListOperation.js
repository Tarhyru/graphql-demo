
/**
 *  假装这里有数据库操作
 */

let nextId = 4;
const bookList = [
    {
        id: '1',
        name: 'title 1',
        author: 'some 1',
        date: '2019-08-05'
    },
    {
        id: '2',
        name: 'title 2',
        author: 'some 2',
        date: '2019-08-03'
    },
    {
        id: '3',
        name: 'title 3',
        author: 'some 3',
        date: '2019-08-04'
    }
]

module.exports = {
    getBookList: function () {
        return bookList
    },
    deleteBook: function (id) {
        let index = -1;
        for (let i = 0; i < bookList.length; i++) {
            if (bookList[i].id == id) {
                index = i
                break;
            }
        }
        if (index != -1) {
            bookList.splice(index, 1);
            return true
        }
        return false
    },
    editBook: function ({ id, name, author }) {
        let find = bookList.find((item) => {
            return item.id == id;
        })
        if (find) {
            find.name = name || find.name
            find.author = author || find.author
            return true
        }
        return false
    },
    addBook: function ({ name, author, date = new Date().toLocaleDateString() }) {
        let addOption = {
            name,
            author,
            date,
            id: nextId
        }
        bookList.push(addOption);
        nextId++

        return addOption
    }
}
