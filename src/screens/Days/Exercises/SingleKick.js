import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'

const Seperator = () => <View style = {styles.seperator} />
const SingleKick = () => {
    return (
<View style={styles.container2}>
      <Text>Begin by putting your feet together no more than three inches apart.</Text>
      <Seperator/>
      <Text>Slightly bend the knees and lift one leg 3-6 inches off the ground.</Text>
      <Seperator/>
      <Text>Hold this position for 10-15 seconds and then return your foot to the floor.</Text>
      <Seperator/>
      <Text>Repeat the same process for the opposite leg.</Text>
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