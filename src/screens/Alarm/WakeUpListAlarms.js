import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Button, Text, FlatList, SafeAreaView } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { deleteAlarm } from './actions/WakeUpAlarm';
import ReactNativeAN from 'react-native-alarm-notification';


const WakeUpListAlarms = (props) => {
    const keyExtractor = (item, index) => index.toString();


    const renderItem = ({ item }) => {

        return (
            <View style={styles.container}>
                <ListItem>
                <ListItem.Content>
                    <ListItem.Title style={styles.titleStyle}>{item.time.toString()}</ListItem.Title>
                    <ListItem.Subtitle>{item.date.toString()}</ListItem.Subtitle>
                </ListItem.Content>
                        <Button
                            title="Remove"
                            color="red"
                            onPress={() => {
                                ReactNativeAN.deleteAlarm(item.wakeUpAlarmNotifData.id);
                                ReactNativeAN.stopAlarmSound();
                                props.delete(item.value);
                            }}
                        />
                    
                </ListItem>
            </View>

        );
    }

    return (
        <FlatList
            keyExtractor={keyExtractor}
            data={props.wakeUpAlarms}
            renderItem={renderItem}
        />
    );
}


const styles = StyleSheet.create({
    container: {color: 'black'},
    titleStyle: { fontWeight: 'bold', fontSize: 30 },
  });


const mapStateToProps = state => {
    return {
        wakeUpAlarms: state.alarms.wakeUpAlarms,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        delete: value => {
            dispatch(deleteAlarm(value));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(WakeUpListAlarms);

