
import React, { Component } from 'react';
import { View, Text, Button } from "react-native";

class SignUpView extends Component {
    render() {
        return (
            <View>
                <Text>SignInView</Text>
                <Button title="go sign in screen" onPress={() => this.props.navigation.navigate('SignIn')} />
            </View>
        )
    }
};

export default SignUpView;