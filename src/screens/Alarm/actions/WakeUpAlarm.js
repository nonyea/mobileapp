import {ADD_WAKE_UP_ALARM, DELETE_WAKE_UP_ALARM} from './index';

export const addAlarm = time => {
  return {
    type: ADD_WAKE_UP_ALARM,
    payload: time,
  }
};

export const deleteAlarm = time => {
  return {
    type: DELETE_WAKE_UP_ALARM,
    payload: time,
  }
};
