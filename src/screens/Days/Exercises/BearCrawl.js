import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'

const Seperator = () => <View style = {styles.seperator} />
const BearCrawl = () => {
    return (
        <View style={styles.container2}>
        <Text>Start in a pushup position.</Text>
        <Seperator/>
        <Text> While keeping the knees off the ground and bent, crawl forward by alternating leg and arm movements.</Text>
        <Seperator/>
        <Text>Keeping the torso level and abs supported.</Text>
        <Image
            style={{width: '100%', height: '50%'}}
            source={{uri:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/BEAR_CRAWL.gif?w=1845'}}
        />
        <Text> Video source: medicalnewstoday.com</Text>
      </View>
    );
}

export default BearCrawl;