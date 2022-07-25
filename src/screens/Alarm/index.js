/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import SleepScreen from '../SleepScreen';
 import React from 'react';
 /* import {name as appName} from './app.json'; */
 import {Provider} from 'react-redux';
 import {configureStore1 as configureStore} from './store/index';

 const store = configureStore();
 
 const RNRedux = () => {
   //return
   <Provider store={store}>
     <SleepScreen />
   </Provider>
 }
 
/*  AppRegistry.registerComponent(appName, () => RNRedux); */
 