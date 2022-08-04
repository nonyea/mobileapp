import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'


const Seperator = () => <View style = {styles.seperator} />

const Jogging = () => {
    return (
<View style={styles.container2}>
      <Text>Bounce from one foot to the other.</Text>
      <Seperator/>
      <Text>At the same same, swing the arms from front to back in a contrasting manner.</Text>
      <Seperator/>
      <Image
          style={{width: '100%', height: '50%'}}
          source={{uri:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_Cardio_Exercises_You_Can_Do_At_Home_High_Knees-1.gif?w=1845'}}
      />
      <Text> Video source: medicalnewstoday.com</Text>
        </View>
    );
}

export default Jogging;