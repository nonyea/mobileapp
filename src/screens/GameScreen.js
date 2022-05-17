import * as React from 'react';
import { View, Text, Button } from 'react-native';
/*
import { Navigation } from 'react-native-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; */

const GameScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text

                style={{ fontSize: 26, fontWeight: 'bold' }}>Welcome to the Game Screen where you would be tasked on a game of sudoku
                </Text>
                <Button title="Start new game" onPress= {()=> navigation.navigate('sudoku')}></Button>

        </View>
    );
}

export default GameScreen;