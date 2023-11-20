import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  byDates: {},
  allDates: []

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

    }
  }
})

//selectors


export const allTodosSelector = state => state.todos.allDates.map(id => state.todos.byDates[id])
export const { addTodo, addTodoInDate } = todoSlice.actions

export default todoSlice.reducer