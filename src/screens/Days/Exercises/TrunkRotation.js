import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'


const Seperator = () => <View style = {styles.seperator} />
const TrunkRotation = () => {
    return (
        <View style={styles.container2}>
      <Text>With a heavy object in your hands,  elevate them to chest height with your elbows at your sides.</Text>
      <Seperator/>
      <Text>Twist the torso to one side, then the other.</Text>
      <Seperator/>
      <Text>A person can also hold their arms at shoulder height and twist their torso from side to side.</Text>
      <Seperator/>
      <Image
          style={{width: '100%', height: '50%'}}
          source={{uri:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_The_Benefits_of_Dynamic_Stretching_and_How_to_Get_Started_Spinal_Rotations.gif?w=1845'}}
      />
      <Text> Video source: medicalnewstoday.com</Text>
        </View>
    );
}

export default TrunkRotation;