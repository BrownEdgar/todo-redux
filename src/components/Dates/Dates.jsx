
import { useSelector } from 'react-redux'
import RightArrow from '../../assets/RightArrow'
import './Dates.css'
import { allTodosSelector } from '../../features/todoSlice'

export default function Dates() {
  const todos = useSelector(allTodosSelector)
  console.log(todos);
  return (
    <div className='Dates'>
      <h2 className='Dates-Title'>Dates</h2>
      <ul id='Dates-list'>
        {/* {todos.map(elem => {
          return (
            <li key={elem}>

              <span>
                <RightArrow />
              </span>
            </li>
          )
        })} */}
      </ul>
    </div>
  )
}
