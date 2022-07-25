import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'


const Seperator = () => <View style = {styles.seperator} />

const LateralShuffles = () => {
    return (
        <View style={styles.container2}>
        <Text>Start on one end of a room and squat slightly.</Text>
        <Seperator/>
        <Text> Shuffle toward the other side of the room, with the feet meeting together before shuffling out and forward again.</Text>
        <Seperator/>
        <Text>Pick up speed and increase the squat depth to increase the exercise intensity.</Text>
        <Seperator/>
        <Image
            style={{width: '100%', height: '50%'}}
            source={{uri:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_Low_Impact_Cardio_Exercises_Lateral_Shuffle.gif?w=1155&h=840'}}
        />
        <Text> Video source: medicalnewstoday.com</Text>
      </View>
    );
}

export default LateralShuffles;