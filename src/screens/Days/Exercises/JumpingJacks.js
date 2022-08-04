import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'


const Seperator = () => <View style = {styles.seperator} />

const JumpingJacks = () => {
    return (
        <View style={styles.container2}>
        <Text>Start with your arms down and your feet as wide as hip-width.</Text>
        <Seperator/>
        <Text>Raise your arms up to the sides while jumping out with your feet apart.</Text>
        <Seperator/>
        <Text>Jump back into the starting position and land on the balls of the feet.</Text>
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