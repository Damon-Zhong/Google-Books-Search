const mongoose = require( 'mongoose' )

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

// include mongoose models
const db = require( '../model' )

const orm = {
    getAllBooks: async () => {
        return await db.Book.find({})
    },
    getBookByName: async (title) => {
        return await db.Book.findOne({title:title})
    },
    insertBook: async (bookData) =>{
        await db.Book.create(bookData)
    },
    deleteBook: async (bookId) => {
        await db.Book.deleteOne({_id:bookId})
    }
}

module.exports = orm