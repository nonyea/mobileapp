import {ADD_WAKE_UP_ALARM, DELETE_WAKE_UP_ALARM} from '../actions/index';
import Moment from 'moment';

const initialState = {
  wakeUpAlarms: [],
};

const wakeUpAlarmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WAKE_UP_ALARM:
      Moment.locale('en');
      console.log('time', state);
      const payload = action.payload;
      const time = Moment(payload.data.value).format('hh:mm A');
      const date = Moment(payload.data.value).format('d/M/YY');
      console.log(time);
      const wakeUpAlarm = {
        wakeUpAlarmNotifData: payload,
        value: payload.data.value,
        time: time,
        date: date,
      };
      return {
        ...state,
        wakeUpAlarms: state.wakeUpAlarms.concat(wakeUpAlarm),
      };

    case DELETE_WAKE_UP_ALARM:
      return {
        ...state,
        wakeUpAlarms: state.wakeUpAlarms.filter(v => {
          return v.value !== action.payload;
        }),
      };

    default:
      return state;
  }
};

export default wakeUpAlarmReducer;
