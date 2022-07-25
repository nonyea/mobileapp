import { configureStore, combineReducers, createStore } from 'redux';

import alarmReducer from '../reducers/alarmReducer';

const rootReducer = combineReducers({
  alarms: alarmReducer,
});

export const configureStore1 = () => {
  return createStore(rootReducer);
};


