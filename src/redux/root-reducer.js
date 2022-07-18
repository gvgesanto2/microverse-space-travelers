/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import missionReducer from './mission/mission.reducer';
import rocketReducer from './rocket/rocket.reducer';

export const rootReducer = combineReducers({
  rocket: rocketReducer,
  mission: missionReducer,
});
