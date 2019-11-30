
import React, { Component } from 'react';
import { View, Button, TextInput, Text, ActivityIndicator, StyleSheet } from "react-native";
import { signUpDispatcher } from "../../dispatchers/auth";
import { connect } from 'react-redux';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading: false
        };
    }

    handleOnSignUp = event => {
        this.props.signUp(this.state);
    }

    render() {
        const isLoading = this.state.isLoading ? <ActivityIndicator size="large" color="#01579B" style={{ height: 50 }} /> : null;

        return (
            <View style={styles.container}>
                <Text h1 style={styles.text}>Sign Up</Text>
                <TextInput placeholder="Email address..." style={styles.textInput}
                    onChangeText={(email) => this.setState({ email })} />
                <TextInput secureTextEntry placeholder="Password..." style={styles.textInput}
                    onChangeText={(password) => this.setState({ password })} />

                <Button color="#01579B" title="SIGN UP" onPress={this.handleOnSignUp} />

                {isLoading}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    textInput: { color: "#ffffff" },
    container: { backgroundColor: "#E1E2E1", height: 350 },
    text: { color: "#ffffff", fontSize: 32, backgroundColor: "#01579b", paddingTop: 20, paddingBottom: 20, textAlign: "center" }
});

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    signUp: userData => dispatch(signUpDispatcher(userData))
})


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)