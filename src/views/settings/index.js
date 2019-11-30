
import React from 'react';
import { View, Text, Button } from "react-native";
import { signOutDispatcher } from "../../dispatchers/auth";
import { useDispatch } from 'react-redux';

export default SettingsView = () => {
    const dispatch = useDispatch();
    return (
        <View>
            <Text>SettingsView</Text>
            <Button title="SIGN OUT" onPress={() => dispatch(signOutDispatcher())} />
        </View>
    )
}
