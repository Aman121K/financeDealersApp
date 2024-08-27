import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CustomInput from '../../../Constant/CustomInput';
import CustomButton from '../../../Constant/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate("HomeScreen")
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword')
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Login Page</Text>
            <View style={styles.inputContainer}>
                <CustomInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <CustomInput
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <CustomButton
                title="Login"
                onPress={handleLogin}
            />
            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f8f9fa',
        height: '100%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
    },
    inputContainer: {
        marginBottom: 20,
    },
    forgotPassword: {
        marginTop: 20,
        alignSelf: 'flex-end',
        color: '#007bff',
        fontSize: 16,
        textDecorationLine: 'underline'
    },
});
