import * as React from 'react';
import { View, Text } from 'react-native';

export default function AboutScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}> This application was set up in order to assist and monitor the cohnititve development of individuals </Text>
        </View>
    );
}