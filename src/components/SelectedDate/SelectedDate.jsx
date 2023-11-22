/* eslint-disable react-hooks/exhaustive-deps */
import LeftArrow from '../../assets/LeftArrow'
import PropTypes from 'prop-types';
import './SelectedDate.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { clearemptyListById, deleteTodo, updateTodo } from '../../features/todoSlice';

export default function SelectedDate({ toggleList }) {
  const { date, data } = useSelector(state => state.todos.selectedDate);
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState(false)


  useEffect(() => {
    if (data?.length === 0 && date) {
      toggleList()
      dispatch(clearemptyListById({ date }))
    }
  }, [data, toggleList, date])



  const dispatch = useDispatch()


  const handleEditingId = (id, message) => {
    setEditingId(id)
    setEditText(message)
  }

  const onDelete = (date, id) => {
    dispatch(deleteTodo({ date, id }))
  }
  const onCancel = () => {
    setEditingId(null)
  }
  const onSave = (date, todoId) => {
    setEditingId(null)
    dispatch(updateTodo({ message: editText, date, id: todoId }))
  }

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.trim().length === 0) return;
    setEditText(value)
  }

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
          return (
            <li key={todo.id}>
              {
                (editingId !== todo.id) ? (
                  <label htmlFor="checkbox">
                    <input
                      className="checkbox"
                      type="checkbox"
                    />
                    <span>
                      {todo.message}
                    </span>
                  </label>
                ) : (
                  <input
                    type="text"
                    className='editableInput'
                    value={editText}
                    onChange={handleChange}
                  />
                )
              }

              <div className="buttons">
                <button
                  className='btn-edit'
                  onClick={() => { (editingId === todo.id) ? onSave(todo.date, todo.id) : handleEditingId(todo.id, todo.message) }}
                >
                  {(editingId === todo.id) ? "Save" : "Edit"}
                </button>
                <button
                  className={
                    classNames('btn-delete', {
                      'btn-Cancel': editingId === todo.id
                    })
                  }
                  onClick={() => { (editingId === todo.id) ? onCancel() : onDelete(todo.date, todo.id) }}
                >
                  {(editingId === todo.id) ? "Cancel" : "Delete"}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

SelectedDate.propTypes = {
  toggleList: PropTypes.func.isRequired
}

