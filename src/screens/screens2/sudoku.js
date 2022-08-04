import React, { useState, useRef } from "react";
import { View } from 'react-native';

import { WebView } from 'react-native-webview';




const Sudoku = () => {

  return (
    <View style={{width: "100%", height: "100%"}}>
    {/* Full screen view */}
    <WebView source={{uri: "https://sudoku.com/"}}/>
    </View>
  )
}

export default Sudoku;
