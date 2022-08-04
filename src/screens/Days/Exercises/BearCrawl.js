import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'

const Seperator = () => <View style = {styles.seperator} />
const BearCrawl = () => {
    return (
        <View style={styles.container2}>
        <Text>Begin in a pushup position.</Text>
        <Seperator/>
        <Text>Alternate leg and arm movements as you crawl forward while your knees remain off the ground and bent.</Text>
        <Seperator/>
        <Text>Make sure that the torso level and abs are engaged.</Text>
        <Image
            style={{width: '100%', height: '50%'}}
            source={{uri:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/BEAR_CRAWL.gif?w=1845'}}
        />
        <Text> Video source: medicalnewstoday.com</Text>
      </View>
    );
}

export default BearCrawl;