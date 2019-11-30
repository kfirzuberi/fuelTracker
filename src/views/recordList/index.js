import React from 'react';
import { View, Text, Button } from "react-native";

export default RecordListView = (props) => {
    const { navigation } = props;
    return (
        <View>
            <Text>RecordListView</Text>
            <Button title="go to add new record screen" onPress={() => navigation.navigate('NewRecordView')} />
            <Button title="go to add edit record screen" onPress={() => navigation.navigate('EditRecordView')} />
        </View>
    )
};