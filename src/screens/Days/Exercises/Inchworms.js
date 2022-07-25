import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'


const Seperator = () => <View style = {styles.seperator} />

const Inchworms = () => {
    return (
        <View style={styles.container2}>
        <Text>Start in a standing position, reach down and touch the toes briefly before walking the hands out to a pushup position.</Text>
        <Seperator/>
        <Text>Perform a pushup, then walk the feet toward the hands and lift the hips upwards, similar to the downward dog position.</Text>
        <Seperator/>
        <Text>Inch the feet as close as possible toward the hands before walking the hands out to return to the pushup position.</Text>
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