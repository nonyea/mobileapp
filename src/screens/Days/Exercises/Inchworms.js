import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'


const Seperator = () => <View style = {styles.seperator} />

const Inchworms = () => {
    return (
        <View style={styles.container2}>
        <Text>From a standing position, briefly touch your toes before moving your hands out to a pushup position.</Text>
        <Seperator/>
        <Text>Perform a pushup, then move your feet toward your hands while lifting your hips upwards like in a downward dog position.</Text>
        <Seperator/>
        <Text>Inch your feet as near to your hands as you can, then walk your hands out to resume at the pushup position.</Text>
        <Seperator/>
        <Image
            style={{width: '100%', height: '50%'}}
            source={{uri:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_Cardio_Exercises_You_Can_Do_At_Home_Inchworm_Crawl.gif?w=1155&h=840'}}
        />
        <Text> Video source: medicalnewstoday.com</Text>
      </View>
    );
}

export default Inchworms;