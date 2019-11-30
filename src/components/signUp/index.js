
import React , {useState} from 'react';
import { View, Button, TextInput, Text, ActivityIndicator, StyleSheet } from "react-native";
import { signUpDispatcher } from "../../dispatchers/auth";
import { useDispatch } from 'react-redux';

const styles = StyleSheet.create({
    textInput: { color: "#ffffff" },
    container: { backgroundColor: "#E1E2E1", height: 350 },
    text: { color: "#ffffff", fontSize: 32, backgroundColor: "#01579b", paddingTop: 20, paddingBottom: 20, textAlign: "center" }
});

export default SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const loading = isLoading ? <ActivityIndicator size="large" color="#01579B" style={{ height: 50 }} /> : null;

    return (
        <View style={styles.container}>
            <Text h1 style={styles.text}>Sign Up</Text>
            <TextInput placeholder="Email address..." style={styles.textInput}
                onChangeText={email => setEmail(email)} />
            <TextInput secureTextEntry placeholder="Password..." style={styles.textInput}
                onChangeText={password => setPassword(password)} />

            <Button color="#01579B" title="SIGN UP" onPress={() => dispatch(signUpDispatcher({ email, password }))} />

            {loading}
        </View>
    )
}