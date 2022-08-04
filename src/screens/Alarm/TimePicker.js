import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Alert,
  Button,
  Text,
  SafeAreaView,
} from "react-native";
import * as Device from "expo-device";
import { connect } from "react-redux";
import { addAlarm } from "./actions/alarm";
import DateTimePicker from "react-native-modal-datetime-picker";
import ReactNativeAN from "react-native-alarm-notification";
import * as Notifications from "expo-notifications";

const TimePicker = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const makeid = () => {
    var length = 5;
    var result = "";
    var characters = "0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const showDataTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };
  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };
  const handleDataPicker = (datetime) => {
    var currentTime = Date.now();
    if (datetime.getTime() < currentTime) {
      Alert.alert("Please choose future time");
      hideDateTimePicker();
      return;
    }

    const fireDate = ReactNativeAN.parseDate(datetime);
    console.log("A date has been picked:", fireDate);
    const alarmNotifData = {
      id: makeid(), 
      title: "Alarm Ringing", 
      message: "My Notification Message", 
      channel: "alarm-channel", 
      ticker: "My Notification Ticker",
      auto_cancel: true, 
      vibrate: true,
      vibration: 100, 
      small_icon: "ic_launcher", 
      large_icon: "ic_launcher",
      play_sound: true,
      sound_name: null, 
      color: "red",
      schedule_once: true, 
      tag: "some_tag",
      fire_date: fireDate, 
      data: { value: datetime },
      
    };

    props.add(alarmNotifData);
    //ReactNativeAN.scheduleAlarm(alarmNotifData);
    hideDateTimePicker();
    schedulePushNotification(datetime) 
      .then(() => {
        Alert.alert("Notification scheduled");
      })
      .catch((e) => {
        Alert.alert(`Notification scheduling failed: ${e}`);
        console.log(e);
      });


  };

  return (
    <>
      <Button
        title="+ Add Alarms"
        color="#0293d6"
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
  );
};

async function schedulePushNotification(date) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Wake up. 📬",
      body: "Time to wake up",
      data: { data: "goes here" },

    },
    trigger: { date: date },
  });
}


async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: (alarmNotifObj) => {
      dispatch(addAlarm(alarmNotifObj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);
