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
    },

    updateTodo(state, { payload }) {
      const result = state.byDates[payload.date].map(todo => (todo.id === payload.id) ? payload : todo)
      state.byDates[payload.date] = result
      state.selectedDate = {
        date: state.selectedDate.date,
        data: result
      }
    },

    deleteTodo(state, { payload }) {
      const filtered_data = state.byDates[payload.date].filter(todo => todo.id !== payload.id)
      return {
        ...state,
        byDates: { ...state.byDates, [payload.date]: filtered_data },
        selectedDate: { ...state.selectedDate, data: filtered_data }
      }
    },

    clearemptyListById(state, { payload }) {
      return {
        ...state,
        allDates: state.allDates.filter(dates => dates !== payload.date),
        selectedDate: { data: [], date: '' }
      }
    }
  }
})

//selectors
export const allTodosSelector = state => state.todos.allDates.map(id => ({ id, length: state.todos.byDates[id]?.length }))


export const { addTodo, addTodoInDate, updateSelectedDate, updateTodo, deleteTodo, clearemptyListById } = todoSlice.actions
export default todoSlice.reducer