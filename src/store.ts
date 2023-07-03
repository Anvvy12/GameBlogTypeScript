import { configureStore, Store, AnyAction } from '@reduxjs/toolkit';
import paginationReducer from './features/pagination/pagination.reducer';
import thunk, { ThunkMiddleware } from 'redux-thunk';

const store: Store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
  middleware: [thunk as ThunkMiddleware<any, AnyAction>],
});

export default store;
