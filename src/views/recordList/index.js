
import React, { Component } from 'react';
import { View, Text, Button } from "react-native";

class RecordListView extends Component {

    render() {
        return (
            <View>
                <Text>RecordListView</Text>
                <Button title="go to add new record screen" onPress={() => this.props.navigation.navigate('NewRecordView')} />
                <Button title="go to add edit record screen" onPress={() => this.props.navigation.navigate('EditRecordView')} />
            </View>
        )
    }
};

export default RecordListView;