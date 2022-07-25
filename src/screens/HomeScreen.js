
import React, { useEffect } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    ScrollView,
    FlatList,
    Image,
    ImageBackground,
    Alert,
    SafeAreaView,
    StatusBar
} from 'react-native';
import Counter from './Counter'
//import { Divider } from 'react-native-elements';
//import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';

const Seperator = () => <View style = {styles.seperator} />


const HomeScreen = ({route, navigation}) => {
const {userName} = route.params


    useEffect(()=> console.log(route.params))
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                
                    <View style={styles.header}>
                        <Text style={styles.text_header}>Welcome! {userName}</Text>
                    </View>


                    <View style={styles.footer}>

                        <ImageBackground source={require('../assets/quote.jpg')}  style={styles.opt1}>
                            <Text style={styles.text}>quote</Text>
                        </ImageBackground>

                        <ImageBackground source={require('../assets/sleep.jpg')} resizeMode="cover" style={styles.opt1}>
                            <Text style={styles.text}>Sleep for 7-9 hours daily</Text>
                        </ImageBackground>

                        <ImageBackground source={require('../assets/device.jpg')} resizeMode="cover" style={styles.opt1}>
                            <Text style={styles.text}>Try to limit your daily recreational ddevice use to 3 hours</Text>
                        </ImageBackground>

                        <ImageBackground source={require('../assets/food.jpg')} style={styles.opt1}>
                            <Text style={styles.text}>Start your day with meal packed with vitamins</Text>
                        </ImageBackground>

                        <ImageBackground source={require('../assets/exercise.jpg')} style={styles.opt1}>
                            <Text style={styles.text}>Choose any 2 days to rest from exercises</Text>
                        </ImageBackground>

                        <ImageBackground source={require('../assets/quiz.jpg')} style={styles.opt1}>
                            <Text style={styles.text}>Take the quiz weekly to check your improvement</Text>
                        </ImageBackground>

                        
                        <Seperator />

                        <Counter/>
                        <Text style={styles.text_footer}> Daily quote</Text>
                        <TouchableOpacity>
                        <Image
                            source={require('../assets/sleep.jpg')}
                            style={{
                                position: 'absolute',
                                top: 60,
                                left: -50,
                            }}
                            
                        />
                        <Text> hi</Text>
                        </TouchableOpacity>
                        <View style={styles.action}>
                        </View>

                    </View> 

               
            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#19719a',
      paddingTop: StatusBar.currentHeight
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 30,
        backgroundColor: '#19719a'
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#000000',
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
    },
    seperator: {
        marginVertical: 8,
        borderBottomColor: '#fff',
        borderBottomWidth: 15

    },
    opt1: {
        padding: 20,
        borderRadius: 35,
        width: '105%',
        height: '40%',
        justifyContent: 'center',
        overflow: 'hidden',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,

      },
      text: {
        fontWeight: 'bold',
      },
      opt4: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 15,
        width: 130,
        height: 60,
    
        position: 'absolute',
        top: 180,
        left: 250
      },
      opt5: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 15,
        width: 130,
        height: 60,
    
        position: 'absolute',
        top: 180,
        left: 250
      },
      optText: {
        color: "#19719a",
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center'
      },
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      }
});
