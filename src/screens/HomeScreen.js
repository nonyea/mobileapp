import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { useState } from "react-native"
import { Feather } from '@expo/vector-icons';

const Seperator = () => <View style={styles.seperator} />;
const Seperator2 = () => <View style={styles.seperator2} />;


const HomeScreen = ({ route, navigation }) => {
  const { userName } = route.params;

  useEffect(() => console.log(route.params));
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{...styles.scrollView, flexGrow: 1}}>
        <View style={styles.header}>
        <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
          />
          <Text style={styles.text_header}>Welcome {userName}!</Text>
        </View>

        <View style={styles.footer}>
          <Seperator/>
          <ImageBackground
            source={require("../assets/sleep.jpg")}
            resizeMode="cover"
            style={styles.opt1}
          >
          <Text style={styles.text}>Sleep for 7-9 hours daily</Text>
          </ImageBackground>

          <Seperator/>

          <ImageBackground
            source={require("../assets/quote.jpg")}
            resizeMode="cover"
            style={styles.opt1}
          >
          <Text style={styles.text}>"Never mistake activity for achivement" - John Wooden</Text>
          </ImageBackground>

          <Seperator/>

          <ImageBackground
            source={require("../assets/food.jpg")}
            resizeMode="cover"
            style={styles.opt1}
          >
          <Text style={styles.text}>Start your day with a meal packed with vitamins</Text>
          </ImageBackground>

          <Seperator/>

          <ImageBackground
            source={require("../assets/brain.jpg")}
            resizeMode="cover"
            style={styles.opt1}
          >
          <Text style={styles.text}>Partake in mentally stimulating activities regularly</Text>
          </ImageBackground>

          <Seperator/>

          <ImageBackground
            source={require("../assets/sudoku.png")}
            resizeMode="cover"
            style={styles.opt1}
          >
          <Text style={styles.text}>Visit the sudoku screen to play a game of sudoku</Text>
          </ImageBackground>

          <Seperator/>

          <ImageBackground
            source={require("../assets/device.jpg")}
            resizeMode="cover"
            style={styles.opt1}
          >
          <Text style={styles.text}>
              Limit your daily recreational device use to 3 hours
            </Text>
          </ImageBackground>

          <Seperator/>

          <ImageBackground
            source={require("../assets/exercise.jpg")}
            style={styles.opt1}
          >
          <Text style={styles.text}>
              Choose any 2 days to rest from exercises
            </Text>
          </ImageBackground> 

          <Seperator/>

          <ImageBackground
            source={require("../assets/quiz.jpg")}
            style={styles.opt1}
          >
          <Text style={styles.text}>
              Take the quiz weekly to check your improvement
          </Text>
          </ImageBackground>

          <Seperator/>
          
        </View>
        <View>
          <Seperator2/>
          <Text style = {styles.footer2_text}> <Feather name="mail" size={24} color="white" />   email: braintease@gmail.com </Text> 
          <Seperator2/>
          <Text style = {styles.footer2_text}> <Feather name="phone" size={24} color="white" />   phone number: +234 806 479 2325</Text>
          <Seperator2/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.05;

const {height2} = Dimensions.get("screen");
const height_2 = height * 0.2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19719a",
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flex: 2,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
    backgroundColor: "#19719a",
  },
  logo: {
    width: height_logo,
    height: height_logo,
    left: '87%',
    top: '10%'
  },
  scrollView: {
    marginHorizontal: 10,
    color: "#19719a"
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  footer2_text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",

  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#000000",
    fontSize: 18,
  },

  seperator: {
    marginVertical: 8,
    borderBottomColor: "#fff",
    borderBottomWidth: 15,
  },
  seperator2: {
    marginVertical: 8,
    borderBottomColor: "#19719a",
    borderBottomWidth: 15,
  },
  opt1: {
    padding: 20,
    borderRadius: 35,
    width: "105%",
    height: "40%",
    height: 300,
    justifyContent: "center",
    overflow: "hidden",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    width: height2,
    height: height_2,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
  },
  optText: {
    color: "#19719a",
    fontWeight: "bold",
    justifyContent: "center"
  }
});
