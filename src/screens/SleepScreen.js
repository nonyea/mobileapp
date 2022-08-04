import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Button, Text, SafeAreaView } from 'react-native';
import TimePicker from './Alarm/TimePicker';
import ListAlarms from './Alarm/ListAlarms';
import { Provider } from 'react-redux';
import { Divider } from 'react-native-paper';
import { configureStore1 as configureStore } from './Alarm/store';


const SleepScreen = () => {
  const store = configureStore();
  const [sleepTime, setSleepTime] = useState(Date.now())
  useEffect(()=>{
    console.log("Update",sleepTime)
  }, [])

  return (
    <View style={styles.mainContainer}>

      <View style={styles.externalContainer}>
        <Provider store={store}>

          <Text style={styles.heading}>Wake Up Time</Text>
          <SafeAreaView style={styles.listAlarms}>
            <ListAlarms />
          </SafeAreaView>

          <View style={styles.timePicker}>
            <TimePicker setSelectedSleepTime={setSleepTime} />
          </View>
        </Provider>

      </View>
    </View>

  );
}

export default SleepScreen;


const styles = StyleSheet.create({
  externalContainer: {
    height: "50%",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    // fontWeight: "bold",
    fontSize: 25,
    padding: 20,
  },
  timePicker: {
    paddingTop: '10%',
    width: '50%',
    // right: '10%',
    bottom: 20,
  },
  listAlarms: {
    flex: 1,
    width: '100%',
  },
});



