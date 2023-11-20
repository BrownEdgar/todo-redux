import LeftArrow from '../../assets/LeftArrow'
import PropTypes from 'prop-types';
import './SelectedDate.css'

export default function SelectedDate({ dateId, toggleList }) {
  return (
    <div className='SelectedDate'>
      <div className='SelectedDate-header'>
        <button className='SelectedDate-backBtn' onClick={toggleList}>
          <LeftArrow />
          Go back
        </button>
        <h2>
          {dateId}
        </h2>
      </div>
      <ul className='SelectedDate-list list'>
        <li>dateId</li>
        <li>dateId</li>
        <li>dateId</li>
      </ul>
    </div>
  )
}

SelectedDate.propTypes = {
  dateId: PropTypes.string.isRequired,
  toggleList: PropTypes.func.isRequired
}