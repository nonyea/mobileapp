

 import SleepScreen from '../SleepScreen';
 import React from 'react';
 /* import {name as appName} from './app.json'; */
 import {Provider} from 'react-redux';

 const store = configureStore();
 
 const RNRedux = () => {
   //return
   <Provider store={store}>
     <SleepScreen />
   </Provider>
 }
 
/*  AppRegistry.registerComponent(appName, () => RNRedux); */
 