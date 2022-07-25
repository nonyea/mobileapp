import { configureStore, createStore, combineReducers } from 'redux';

import wakeUpAlarmReducer from '../reducers/wakeUpAlarm.reducer';

const rootReducer = combineReducers({
  alarms: wakeUpAlarmReducer,
});

export const configureStore1 = () => {
  return createStore(rootReducer);
};


