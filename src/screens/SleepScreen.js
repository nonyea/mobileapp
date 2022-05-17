import DateTimePicker from '@react-native-community/datetimepicker';
import * as React from 'react';
import {useState} from 'react'
import { View, Text, TextInput, Button } from 'react-native';
import { createAlarm } from 'react-native-simple-alarm';

const SleepScreen = () =>  {
    const defaultState = {
        date: Date.now() + 200000 * 24,
        message: "Default Alarm message",
        snooze: 2,
        active: false, 
        userInfo: null


    }
    //const [state, setState] = useState(defaultState)
    const [date, setDate] = useState(null)
    const setAlarm = async(date, message, snoozeTime = 2) => {
        try {
            await createAlarm({
                active: false,
                date: date,
                message: message,
                snooze: snoozeTime,
              });
          } catch (e) {}
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           {/*  <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>
                <DateTimePicker mode={"time"} onChange={setDate}/>
                <Button onPress={()=> setAlarm(date, "Reminder to sleep", 3)}/> */}


        </View>
    );
}

export default SleepScreen;


/*
import AlarmClock from "react-native-alarm-clock";

// ...

// Create an alarm at 1:55PM for next day, with the label 'My Custom Alarm'
let date = new Date();
date.setDate(date.getDate());
date.setHours(11, 29);

// if alarm goes OfflineAudioCompletionEvent, alert something 

AlarmClock.createAlarm(date.toISOString(), 'My Custom Alarm');


*/

/*
import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
*/




/*
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';


export default function SleepScreen() {
    const[wake, setWake] = useState('5');
    const[sleep, setSleep] = useState('10');
    

    return (
        <View style = {styles.container}>
            <Text>Enter wake up time:</Text>
            <TextInput 
            keyboardType='numeric'
            style={styles.input}
            placeholder='eg 5am'
            onChangeText={(val) => setWake(val)}
            /> 

            <Text>Enter sleep time:</Text>
            <TextInput 
            keyboardType='numeric'
            style={styles.input}
            placeholder='eg 10pm'
            onChangeText={(val) => setSleep(val)}
            /> 
            <Text> wake: {wake}, sleep: {sleep} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
        fontStyle: 'italic',

        
    }
});

*/












/*


import React, { Component } from 'react';

export default class SleepScreen extends Component {
    constructor(props) {
        super(props);
        this.state={Num1:''};
    }
    F1=()=>
    {
        var N1=this.state.Num1;
        alert(N1);
        
    }
    render()
    {
        return (
        <View>
            <TextInput style={{borderwidth:3, margin:10}} onChangeText={Num1=>this.setState({Num1})}> </TextInput>
            <Button title="click me" style={{margin:10}} onPress={this.F1}></Button>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Wake up time</Text>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Sleep time</Text>
        </View>
        );
    }
}

*/