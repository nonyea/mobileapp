import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import { useState } from "react";

//import { Divider } from 'react-native-elements';
//import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';


const Login = ({navigation}) => {
//    const[wake, setWake] = useState('5');
    const [userName, setUserName] = useState("")
//    const[sleep, setSleep] = useState('10')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>


            <View style={styles.footer}>
                <Text style={styles.text_footer}>Username</Text>
                <TextInput 
                style={styles.input}
                onChangeText={(val) => {setUserName(val); console.log(userName)}}
                />
                
                <Text style={styles.text_footer}>Password</Text>
                <TextInput 
                style={styles.input}

                />
                <Text> wake: {userName}</Text>

                <View style={styles.action}>
                </View>
                <TouchableOpacity onPress= { ()=> navigation.navigate('Main1', {userName:userName })} style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View> 

        </View>
    )
}
export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#19719a'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        backgroundColor: "#19719a",
        padding: 20,
        borderRadius: 15,
        width: 100,
        height: 60,
        position: 'absolute',
        top: 250,
        left: 280
      },
      buttonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center'
      },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 300,
        fontStyle: 'normal'
    }
});

/*
import * as React from 'react';
import { View, Text, Button } from 'react-native';


const Login = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text

                style={{ fontSize: 26, fontWeight: 'bold' }}>Welcome to the Game Screen where you would be tasked on a game of sudoku
                </Text>
                <Button title="Start new game" onPress= {()=> navigation.navigate('Main1')}></Button>

        </View>
    );
}



export default Login;
*/