import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { BsBookmarkStar,BsBookmarkStarFill } from "react-icons/bs";
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators'
import './BookList.css'


const BookList = () => {

  const dispatch = useDispatch()
  const books = useSelector((state) => state.books)

  const handleDelete = (id) => {
    dispatch(deleteBook(id))
  }

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }

  return (
    <div className='app-block book-list'>
        <h2>Book List</h2>
        {books.length === 0 ? (
          <p>No books available</p>
        ) : (
          <ul>
            {books.map((book,i) => 
              <li key={book.id}>
                <div className='book-info'>{++i}. {book.title} by <strong>{book.author}</strong></div>
                <span onClick={() => handleToggleFavorite(book.id)}>
                {book.isFavorite 
                  ? <BsBookmarkStarFill className='star-icon ' />
                  : <BsBookmarkStar className='star-icon ' />}
                </span>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </li>
          )}
          </ul>
        )}
    </div>
  )
}

export default BookList
