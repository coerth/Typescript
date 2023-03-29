import {books, users} from "../data"

export default {
    addBook: (parent, args, context) => {
      const book = {
        id: String(books.length +1),
        title: args.input.title,
        author: args.input.author,
        ratings: []
      }
      books.push(book);
      return book;
    },
    deleteBook: (parent, args, context) => {
      let deletedBookIndex = books.findIndex(x => x.id === args.id)
      let deletedBook = books.splice(deletedBookIndex, 1)

      return deletedBook[0];
    }
  }