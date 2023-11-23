import { configureStore, combineReducers } from '@reduxjs/toolkit'
import todoSlice from '../features/todoSlice';
import {
  persistStore,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import mainMiddleWaries from '../middlewares';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  todos: todoSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: mainMiddleWaries
})

export const persistor = persistStore(store)
export default store


