import { useState } from 'react';


export default function Bookshelf() {

    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    })

    function handleInputChange({ target }) {
        setNewBook({ ...newBook, [target.name]: target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setBooks(book => [...book, newBook])
        setNewBook({
            title: '',
            author: ''
        })

    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={handleInputChange}
                        value={newBook.title}
                    />
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        onChange={handleInputChange}
                        value={newBook.author}
                    />
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) => {
                    return (
                        <div className="bookCard" key={index}>
                            <h3>{book.title} </h3>
                            <p>by {book.author}</p>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}