import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { BsBookmarkStar,BsBookmarkStarFill } from "react-icons/bs";
import { selectBooks,deleteBook,toggleFavorite } from '../../redux/slices/booksSlice'
import { selectTitleFilter,selectAuthorFilter,selectOnlyFavoriteFilter } from '../../redux/slices/filterSlice'
import './BookList.css'


const BookList = () => {

  const dispatch = useDispatch()
  const books = useSelector(selectBooks)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoritesFilter = useSelector(selectOnlyFavoriteFilter)



  const handleDelete = (id) => {
    dispatch(deleteBook(id))
  }

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }

  const filteredBooks = books.filter((book) => {
      const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase())
      const matchesAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase())
      const matchesFavorite = onlyFavoritesFilter ? book.isFavorite : true
      return matchesTitle && matchesAuthor && matchesFavorite;
  })

  const highlightMatch = (text,filter) => {
    if(!filter) return text

    const regex = new RegExp(`(${filter})`,'gi')
    return text.split(regex).map((substring,i) => {
      if(substring.toLowerCase() === filter.toLowerCase()){
        return (
          <span key={i} className='highlight'>{substring}</span>
        )
      }
      return substring
    })
  }

  return (
    <div className='app-block book-list'>
        <h2>Book List</h2>
        {books.length === 0 ? (
          <p>No books available</p>
        ) : (
          <ul>
            {filteredBooks.map((book,i) => 
              <li key={book.id}>
                <div className='book-info'>{++i}. {highlightMatch(book.title,titleFilter)}
                 by <strong>{highlightMatch(book.author,authorFilter)}</strong>{' '} ({book.source})
                 </div>
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
