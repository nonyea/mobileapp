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
      fontWeight: 'bold', 
      position: 'absolute',
      top: '30%',
      left: '14%'
  },
  text: {
      color: '#fff',
      marginTop:5
  },

  button: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    width: '36%',
    height: '23%',

    position: 'absolute',
    top: '70%',
    left: '70%'
  },
  buttonText: {
    color: "#19719a",
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center'
  }
});

