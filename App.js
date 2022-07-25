import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./src/Main";
import * as Notifications from "expo-notifications";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
const App = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};

export default App;
