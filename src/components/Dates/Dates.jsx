
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import { allTodosSelector } from '../../features/todoSlice'
import RightArrow from '../../assets/RightArrow'
import './Dates.css'

export default function Dates({ toggleList }) {
  const todos = useSelector(allTodosSelector)
  console.log(todos);
  return (
    <div className='Dates'>
      <h2 className='Dates-Title'>Dates</h2>
      <ul id='Dates-list' className='list'>
        {todos.map(elem => {
          return (
            <li key={elem.id} onClick={toggleList}>
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
  toggleList: PropTypes.func.isRequired
}
