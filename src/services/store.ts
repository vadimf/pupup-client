import {configureStore, ActionCreator, Action} from '@reduxjs/toolkit';
import rootReducer, {RootState} from './rootReducer';
import {ThunkAction} from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ActionCreator<
  ThunkAction<void, RootState, null, Action<string>>
>;

export default store;
