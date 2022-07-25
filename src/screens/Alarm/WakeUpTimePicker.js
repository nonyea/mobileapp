import React, { useState } from 'react';
import { StyleSheet, View, Alert, Button, Text, SafeAreaView } from 'react-native';
//import { Alert } from 'react-native-web';
import { connect } from 'react-redux';
import { addAlarm } from './actions/WakeUpAlarm';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Divider } from 'react-native-elements';
import ReactNativeAN from 'react-native-alarm-notification'

const TimePicker = (props) => {
    

   /*  useEffect(() => {
        setSelectedSleepTime(props.selectedSleepTime)
    }, []) */

    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
    const makeid = () => {
        var length = 5;
        var result = '';
        var characters = '0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }


    const showDataTimePicker = () => {
        setIsDateTimePickerVisible(true);
    }
    const hideDateTimePicker = () => {
        setIsDateTimePickerVisible(false);
    }
    const handleDataPicker = (datetime) => {
        var currentTime = Date.now();
        const earliestTime = props.sleepTime + (60 * 60 * 7000)
        if (datetime.getTime() < earliestTime) {
            Alert.alert("You must sleep for a minimum of 7 hours");
            hideDateTimePicker();
            return;
        }

        const fireDate = ReactNativeAN.parseDate(datetime);
        console.log('A date has been picked:', fireDate)
        const wakeUpAlarmNotifData = {
            id: makeid(), // Required
            title: 'Alarm Ringing', // Required
            message: 'My Notification Message', // Required
            channel: 'wakeUpAlarm-channel', // Required. Same id as specified in MainApplication's onCreate method
            ticker: 'My Notification Ticker',
            auto_cancel: true, // default: true
            vibrate: true,
            vibration: 100, // default: 100, no vibration if vibrate: false
            small_icon: 'ic_launcher', // Required
            large_icon: 'ic_launcher',
            play_sound: true,
            sound_name: null, // Plays custom notification ringtone if sound_name: null
            color: 'red',
            schedule_once: true, // Works with ReactNativeAN.scheduleAlarm so wakeUpAlarm fires once
            tag: 'some_tag',
            fire_date: fireDate, // Date for firing wakeUpAlarm, Required for ReactNativeAN.scheduleAlarm.

            // You can add any additional data that is important for the notification
            // It will be added to the PendingIntent along with the rest of the bundle.
            // e.g.
            data: { value: datetime }
        };
        props.add(wakeUpAlarmNotifData);
        ReactNativeAN.scheduleAlarm(wakeUpAlarmNotifData);
        hideDateTimePicker();

    }


    return (
        <>
            <Button
                title='+ Add Alarms'
                color='#0293d6'
                onPress={() => {
                    showDataTimePicker();
                }}
            />
            <DateTimePicker
                mode="datetime"
                isVisible={isDateTimePickerVisible}
                onConfirm={handleDataPicker}
                onCancel={hideDateTimePicker}
            />
        </>
    )
}

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
        add: wakeUpAlarmNotifObj => {
            dispatch(addAlarm(wakeUpAlarmNotifObj));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);
