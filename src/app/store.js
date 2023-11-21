import { configureStore, combineReducers } from '@reduxjs/toolkit'
import todoSlice, { addTodoInDate } from '../features/todoSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const ADD_TODO_ACTION = 'todo/addTodo'
const persistConfig = {
  key: 'root',
  storage,
}

const myMiddleware = (store) => (next) => (action) => {
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




const rootReducer = combineReducers({
  todos: todoSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,],
      },
    }).concat(myMiddleware)
})

export const persistor = persistStore(store)

export default store


