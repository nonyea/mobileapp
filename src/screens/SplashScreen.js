import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const SplashScreen = ({navigation}) => {
   
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                source={require('../assets/splash.png')}
                style={styles.logo}
                resizeMode="stretch"
                />

            </View>
            <View style={styles.footer}>
                <Text style={styles.title}> Improve your cognition</Text>
                <TouchableOpacity onPress= {()=> navigation.navigate('Main2')} style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>

            
            </View>

        </View>

    );
};
export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#19719a',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
      left: 12
  },
  title: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: '#fff',
      marginTop:5
  },

  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  button: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    width: 130,
    height: 60,

    position: 'absolute',
    top: 180,
    left: 250
  },
  buttonText: {
    color: "#19719a",
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center'
  }
});

/*import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: colors.text
            }]}>Stay connected with everyone!</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('Main2')}>
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});

*/

/*
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

const SplashScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text

                style={{ fontSize: 26, fontWeight: 'bold' }}>splash you would be tasked on a game of sudoku
                </Text>
                <Button title="Start new game" onPress= {()=> navigation.navigate('Main2')}></Button>

        </View>
    );
}

export default SplashScreen;

*/
