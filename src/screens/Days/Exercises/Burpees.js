import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'

const Seperator = () => <View style = {styles.seperator} />
const Burpees = () => {
    return (
      <View style={styles.container2}>
      <Text>Begin with your body in a pushup position.</Text>
      <Seperator/>
      <Text>Push with the balls of your feet which would bring your knees into the chest and land in a squat position.</Text>
      <Seperator/>
      <Text>Jump out of the squat while raising your hands up, before landing softly back into the squat. </Text>
      <Seperator/>
      <Text>Put your hands on the floor again as wide as shoulder-width.</Text>
      <Seperator/>
      <Text>Go back to the starting position by springing your legs back.</Text>
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