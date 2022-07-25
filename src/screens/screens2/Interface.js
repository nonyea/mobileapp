import React from "react";
import { TextInput } from "react-native-paper";
import { View,  Button, Text } from 'react-native';
import { GlobalStyles } from "../../Style";

  function Interface({handleInterface, status}){
    return (
      <View  style={GlobalStyles.interface} >
        <View style={GlobalStyles.infoInterface}>
          <TextInput readOnly value={status}></TextInput>
        </View>
        <View style={GlobalStyles.actionInterface}>
          <Button
            style={GlobalStyles.generatorButtonBtn}
            onPress={() => {
              handleInterface("create");
            }}
            title={"Create"}
          />
          <Button
            style={GlobalStyles.validateButtonBtn}
            onPress={() => {
              handleInterface("validate");
            }}
            title={"Validate"}
         />
          <Button
            style={GlobalStyles.solveButtonBtn}
            onPress={() => {
              handleInterface("solve");
            }}
            title={"Solve"}
         />
          <Button
            style={GlobalStyles.clearButtonBtn}
            onPress={() => {
              handleInterface("clear");
            }}
            title={"Clear"}
          >
          </Button>
        </View>
      </View>
    );

  }
  

export default Interface;
