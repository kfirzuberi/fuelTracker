
import React, { Component } from 'react';
import { View, Text, Button } from "react-native";
import { signOutDispatcher } from "../../dispatchers/auth";
import { connect } from 'react-redux';

class SettingsView extends Component {

    handleOnSignOut = event => {
        this.props.signOut();
    }

    render() {
        return (
            <View>
                <Text>SettingsView</Text>
                <Button title="SIGN OUT" onPress={this.handleOnSignOut} />
            </View>
        )
    }
};

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutDispatcher())
})


export default connect(mapStateToProps, mapDispatchToProps)(SettingsView)
