import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'

const Seperator = () => <View style = {styles.seperator} />
const SingleKick = () => {
    return (
<View style={styles.container2}>
      <Text>Start with the feet together or no more than 3 inches apart.</Text>
      <Seperator/>
      <Text>Bend the knees slightly and lift one leg 3-6 in off the floor.</Text>
      <Seperator/>
      <Text> Hold this position for 10-15 seconds and return the foot to the floor.</Text>
      <Seperator/>
      <Text>Repeat for the opposite leg.</Text>
      <Seperator/>
      <Image
          style={{width: '100%', height: '50%'}}
          source={{uri:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_Exercises_for_Balance_Flamingo_Stand.gif?w=1845'}}
      />
      <Text> Video source: medicalnewstoday.com</Text>
        </View>
    );
}

export default SingleKick;