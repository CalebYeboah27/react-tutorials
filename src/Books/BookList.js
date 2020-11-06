import React from 'react'
import './BookList.css'
import {books} from './books'
import Book from './Book'


const BookList = () => {
    return (
        <section className="booklist">
            {
                books.map((book) => {
                    return (
                        <Book 
                            key={book.id}
                            {...book}
                        />
                    )
                })
            }
        </section>
    )
}

export default BookList
