import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'


const Seperator = () => <View style = {styles.seperator} />

const LateralShuffles = () => {
    return (
        <View style={styles.container2}>
        <Text>Start at one end of a room and squat slightly.</Text>
        <Seperator/>
        <Text>Shuffle toward the other half of the room, with your feet meet together before shuffling out and forward again.</Text>
        <Seperator/>
        <Text>Increase the speed and squat depth to intensify the workout.</Text>
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