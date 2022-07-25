import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'


const Seperator = () => <View style = {styles.seperator} />
const SquatJump = () => {
    return (
        <View style={styles.container2}>
      <Text>Stand with the feet hip-width apart and arms at the sides.</Text>
      <Seperator/>
      <Text>Bend at the knees to squat</Text>
      <Seperator/>
      <Text>From the squat position, jump in the air and extend the hips until the body is straight.</Text>
      <Seperator/>
      <Text>Land softly on the balls of the feet, rolling backward to absorb the shock in the heels.</Text>
      <Seperator/>
      <Image
          style={{width: '100%', height: '50%'}}
          source={{uri:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_Squat_Jumps-1.gif?w=1845'}}
      />
      <Text> Video source: medicalnewstoday.com</Text>
        </View>
    );
}

export default SquatJump;