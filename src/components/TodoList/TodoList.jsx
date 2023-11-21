import { useState } from 'react';
import Dates from '../Dates/Dates'
import MainForm from '../MainForm/MainForm'
import './TodoList.css'
import SelectedDate from '../SelectedDate/SelectedDate';

export default function TodoList() {
  const [mainListShow, setMainListShow] = useState(true);

  const toggleList = () => {
    setMainListShow(!mainListShow)
  }

  return (
    <div className="toDolistWrapper">
      {
        mainListShow
          ? (
            <>
              <h1>To do list</h1>
              <MainForm />
              <Dates toggleList={toggleList} />
            </>
          ) : (
            <SelectedDate
              toggleList={toggleList} />
          )
      }
    </div>
  )
}
