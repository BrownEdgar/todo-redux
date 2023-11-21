import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  byDates: {},
  allDates: [],
  selectedDate: {}

}
const todoSlice = createSlice({
  name: "todo",
  initialState: initialStateValue,
  reducers: {
    addTodo(state, { payload }) {
      state.byDates[payload.date] = [payload];
      state.allDates.push(payload.date)
    },
    addTodoInDate(state, { payload }) {
      state.byDates[payload.date].push(payload)
    },
    updateSelectedDate(state, { payload }) {
      state.selectedDate = { date: payload, data: state.byDates[payload] }
    }
  }
})

//selectors


export const allTodosSelector = state => state.todos.allDates.map(id => ({ id, length: state.todos.byDates[id].length }))


export const { addTodo, addTodoInDate, updateSelectedDate } = todoSlice.actions
export default todoSlice.reducer