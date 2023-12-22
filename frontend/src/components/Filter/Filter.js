import { useDispatch, useSelector } from 'react-redux'
import { selectTitleFilter,selectAuthorFilter, setTitleFilter,setAuthorFilter,resetFilters,setOnlyFavorites,selectOnlyFavoriteFilter } from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {

const dispatch = useDispatch();
const titleFilter = useSelector(selectTitleFilter)
const authorFilter = useSelector(selectAuthorFilter)
const onlyFavoritFilter = useSelector(selectOnlyFavoriteFilter)

const handleTitleFilterChange = (e) => {
  dispatch(setTitleFilter(e.target.value))
}

const handleAuthorFilterChange = (e) => {
  dispatch(setAuthorFilter(e.target.value))
}

const handleSetOnlyFavoriteFilterChange = () => {
  dispatch(setOnlyFavorites())
}

const handleResetFilters = () => {
  dispatch(resetFilters());
}

  return (
    <div className='app-block filter'>
      <div className='filter-row'>

        <div className='filter-group'>
          <input 
            value={titleFilter}
            type='text'
            placeholder='Filter by title...' 
            onChange={handleTitleFilterChange} />
        </div>
        <div className='filter-group'>
            <input 
            value={authorFilter}
            type='text'
            placeholder='Filter by author..' 
            onChange={handleAuthorFilterChange} />
        </div>
        <div className='filter-group'>
          <label>
            <input type='checkbox' onChange={handleSetOnlyFavoriteFilterChange} checked={onlyFavoritFilter}/>
            Only Favorite
          </label>
        </div>

            <button type='button' onClick={handleResetFilters}>Reset Filters</button>
      </div>
    </div>
  )
}

export default Filter