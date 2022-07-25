import { configureStore, combineReducers, createStore } from 'redux';

import alarmReducer from '../reducers/alarmReducer';
import wakeUpAlarmReducer from '../reducers/wakeUpAlarm.reducer';

const rootReducer = combineReducers({
  alarms: alarmReducer,
});

export const configureStore1 = () => {
  return createStore(rootReducer);
};


