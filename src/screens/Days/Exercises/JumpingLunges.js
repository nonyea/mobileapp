import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'


const Seperator = () => <View style = {styles.seperator} />

const JumpingLunges = () => {
    return (
        <View style={styles.container2}>
        <Text>Stand with the feet hip-width apart</Text>
        <Seperator/>
        <Text>Extend the right leg back to a lunge position.</Text>
        <Seperator/>
        <Text>Push off with the right foot to lift the right knee to hip height, jumping in the air while doing so.</Text>
        <Seperator/>
        <Text>Return the right foot to the starting position and repeat for 10 lunges on one side.</Text>
        <Seperator/>
        <Text>Repeat for the left leg</Text>
        <Seperator/>
        <Image
            style={{width: '100%', height: '50%'}}
            source={{uri:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_Butt_Cellulite-Exercises_Jump_Lunge.gif?w=1845'}}
        />
        <Text> Video source: medicalnewstoday.com</Text>
      </View>
    );
}

export default JumpingLunges;