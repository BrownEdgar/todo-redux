
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import { allTodosSelector, updateSelectedDate } from '../../features/todoSlice'
import RightArrow from '../../assets/RightArrow'
import './Dates.css'

export default function Dates({ toggleList }) {
  const todos = useSelector(allTodosSelector);
  const dispatch = useDispatch()
  return (
    <div className='Dates'>
      <h2 className='Dates-Title'>Dates</h2>
      <ul id='Dates-list' className='list'>
        {todos.map(elem => {
          return (
            <li key={elem.id} onClick={() => {
              toggleList()
              dispatch(updateSelectedDate(elem.id))
            }}>
              {elem.id}
              {' '}
              ({elem.length})
              <span>
                <RightArrow />
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Dates.propTypes = {
  toggleList: PropTypes.func.isRequired,
}
