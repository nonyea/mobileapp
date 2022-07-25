import React from "react";
import { 
    View, 
    Text, 
    StyleSheet ,
    TouchableOpacity
} from 'react-native';

export default class App extends React.Component{
    state = {
        value: 0
    }

    taps = () => {
        this.setState({
            value: this.state.value + 1

        })
    console.log((this.state.value + 1) + "days of exercise")
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.text_footer}>Click if you've done your exercise today</Text>
                <TouchableOpacity onPress= {this.taps} title="Exercise Done" style={styles.button}>
                    <Text style= {styles.buttonText}> Exercise Done </Text>
                </TouchableOpacity>
                <Text style= {{ fontSize: 60, marginBottom:20}}>{this.state.value}</Text>
                 
            </View>

        )
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 3, 
      backgroundColor: '#fff',
      alignItems: 'center'

    },
    button: {
        backgroundColor: "#19719a",
        padding: 20,
        borderRadius: 15,
        width: 150,
        height: 60,
      },
      buttonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center'
      },
      text_footer: {
        color: '#05375a',
        fontSize: 18
    }
})