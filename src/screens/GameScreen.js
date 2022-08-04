 

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from './screens2/quiz/title'

const GameScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText='SUDOKU' />
      <View>
        <Text style= {styles.text}>Welcome to the Game Screen where you will be tasked in a game of sudoku</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://img.icons8.com/clouds/452/sudoku.png',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('sudoku')}
        style={styles.button}>
        <Text style={styles.buttonText}>Start game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  text: {
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#19719a',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});
