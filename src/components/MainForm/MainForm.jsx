import { useDispatch } from 'react-redux'
import './MainForm.css'
import { useState } from 'react';
import { addTodo } from '../../features/todoSlice';

export default function MainForm() {
  const dispatch = useDispatch();
  const [setselectedDate, setSetselectedDate] = useState('2020-01-02')

  const handleSubmit = (e) => {
    e.preventDefault();
    const { message, date } = e.target;
    console.log(date.value);
    const todo = {
      id: Math.random().toString(36).slice(2, 10),
      message: message.value,
      date: date.value
    }
    dispatch(addTodo(todo));
    e.target.reset()
  }

  const handleDataChange = (e) => {
    setSetselectedDate(e.target.value)
  }
  return (
    <div className='MainForm'>
      <h2 className='MainForm-Title'>New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Type here'
          id='message'
          required
        />
        <input
          type="date"
          value={setselectedDate}
          min="2020-01-02"
          max="2030-01-02"
          id='date'
          onChange={handleDataChange}
          required
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}
