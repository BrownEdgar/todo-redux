import { addTodoInDate } from '../features/todoSlice';

const ADD_TODO_ACTION = 'todo/addTodo'

const checkTodo = (store) => (next) => (action) => {
  if (action.type === ADD_TODO_ACTION) {
    const todos = store.getState().todos
    const isDateExist = todos.allDates.includes(action.payload.date);
    console.log('isDateExist', isDateExist)
    if (isDateExist) {
      store.dispatch(addTodoInDate(action.payload));
      return;
    }
  }
  next(action)
}

export default checkTodo