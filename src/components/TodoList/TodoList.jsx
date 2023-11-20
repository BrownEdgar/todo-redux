import Dates from '../Dates/Dates'
import MainForm from '../MainForm/MainForm'
import './TodoList.css'

export default function TodoList() {
  return (
    <div className="toDolistWrapper">
      <h1>To do list</h1>
      <MainForm />
      <Dates />
    </div>
  )
}
