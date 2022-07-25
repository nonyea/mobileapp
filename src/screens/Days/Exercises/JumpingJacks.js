import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'


const Seperator = () => <View style = {styles.seperator} />

const JumpingJacks = () => {
    return (
        <View style={styles.container2}>
        <Text>Begin with the feet hip-width apart and arms down.</Text>
        <Text> Raise the arms out to the sides, straight in the air while jumping out with the feet apart.</Text>
        <Text>Jump back into the starting position and land softly on the balls of the feet, bringing the arms back into the body.</Text>
        <Seperator/>
        <Image
            style={{width: '100%', height: '50%'}}
            source={{uri:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400-Basic_Jumping_Jacks.gif?w=1845'}}
        />
        <Text> Video source: medicalnewstoday.com</Text>
      </View>
    );
}

export default JumpingJacks;