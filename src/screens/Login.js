import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Dimensions,
    StyleSheet ,
    Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from "react";


const Seperator = () => <View style={styles.seperator} />;

const Login = ({navigation}) => {
    const [userName, setUserName] = useState("")

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
                <Text style={styles.text_header}>Welcome!</Text>
                
            </View>
            

            <View style={styles.footer}>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    size={20}
                />
                <Text style={styles.text_footer}>  Username</Text>
            </View>

            <TextInput 
            style={styles.input}
            onChangeText={(val) => {setUserName(val); console.log(userName)}}
            placeholder='username'
            />
            
            <Seperator/>

            <View style={styles.action}>
                <Feather 
                    name="lock"
                    size={20}
                />
                <Text style={styles.text_footer}>  Password</Text>
            </View>

            <TextInput 
                secureTextEntry={true}
                placeholder='password'
                style={styles.input}
                //autoCapitalize="none"
            />

                <TouchableOpacity onPress= { ()=> navigation.navigate('Main1', {userName:userName })} style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                
            </View> 

        </View>
    )
}
export default Login;


const {height} = Dimensions.get("screen");
const height_logo = height * 0.06;

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
    seperator: {
        marginVertical: 8,
        borderBottomColor: "#fff",
        borderBottomWidth: 10,
    },
      logo: {
        width: height_logo,
        height: height_logo,
        left: '80%',
        top: '25%'
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

    button: {
        backgroundColor: "#19719a",
        padding: 20,
        borderRadius: 20,
        width: '36%',
        height: '12%',
        position: 'absolute',
        top: '60%',
        left: '62%'
      },
      buttonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center',
        position: 'absolute',
        top: '92%',
        left: '42%'
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