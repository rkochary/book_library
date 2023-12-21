import { useDispatch, useSelector } from 'react-redux'
import { selectTitleFilter,selectAuthorFilter, setTitleFilter,setAuthorFilter,resetFilters } from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {

const dispatch = useDispatch();
const titleFilter = useSelector(selectTitleFilter)
const authorFilter = useSelector(selectAuthorFilter)

const handleTitleFilterChange = (e) => {
  dispatch(setTitleFilter(e.target.value))
}

const handleAuthorFilterChange = (e) => {
  dispatch(setAuthorFilter(e.target.value))
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
            <button type='button' onClick={handleResetFilters}>Reset Filters</button>
      </div>
    </div>
  )
}

export default Filter