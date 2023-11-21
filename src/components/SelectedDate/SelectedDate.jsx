import LeftArrow from '../../assets/LeftArrow'
import PropTypes from 'prop-types';
import './SelectedDate.css'
import { useSelector } from 'react-redux';

export default function SelectedDate({ toggleList }) {
  const { date, data } = useSelector(state => state.todos.selectedDate);

  return (
    <div className='SelectedDate'>
      <div className='SelectedDate-header'>
        <button className='SelectedDate-backBtn' onClick={toggleList}>
          <LeftArrow />
          Go back
        </button>
        <h2>
          {date}
          {" "}
          ({data?.length})
        </h2>
      </div>
      <ul className='SelectedDate-list list'>
        {data.map(todo => {
          return <li key={todo.id}>
            <span>
              {todo.message}
            </span>
            <div className="buttons">
              <button className='btn-edit'>Edit</button>
              <button className='btn-delete'>Delete</button>
            </div>
          </li>
        })}
      </ul>
    </div>
  )
}

SelectedDate.propTypes = {
  toggleList: PropTypes.func.isRequired
}