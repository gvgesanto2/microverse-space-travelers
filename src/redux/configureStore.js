import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import rocketReducer from './rocket/rocket.reducer';
import getRocketsFromApi from './rocket/rocketApiAction';

// Initial Data
const preloadedState = {
  rockets: [],
};

// Establish the root reducer
const rootReducer = combineReducers({
  rockets: rocketReducer,
});

// Set up the Store
const ulisesStore = configureStore({
  reducer: rootReducer,
  preloadedState,
});

ulisesStore.dispatch(getRocketsFromApi());

export default ulisesStore;
