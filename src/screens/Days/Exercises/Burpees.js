import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'

const Seperator = () => <View style = {styles.seperator} />
const Burpees = () => {
    return (
      <View style={styles.container2}>
      <Text>Start with the body in a pushup position.</Text>
      <Seperator/>
      <Text> Push off the balls of the feet to bring the knees into the chest and land in a squat.</Text>
      <Seperator/>
      <Text>Jump out of the squat, raising the hands in the air before landing softly back into the squat. </Text>
      <Seperator/>
      <Text>Place the hands back on the floor underneath the shoulders.</Text>
      <Seperator/>
      <Text>Spring the legs back to return to the starting position.</Text>
      <Seperator/>
      <Image
          style={{width: '100%', height: '50%'}}
          source={{uri:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_8_Calisthenics_Exercises_for_Beginners_Burpees.gif?w=1845'}}
      />
      <Text> Video source: medicalnewstoday.com</Text>
        </View>
    )
}

export default Burpees;