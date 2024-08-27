import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomInput from '../../../Constant/CustomInput';
import CustomButton from '../../../Constant/CustomButton';
import CustomHeader from "../../../Constant/CustomHeader";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const handleForgotPassword = () => {
        // Handle the forgot password logic here
        console.log('Forgot Password email submitted:', email);
    };

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader/>
            <Text style={styles.title}>Forgot Password</Text>
            <View style={styles.inputContainer}>
                <CustomInput
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <CustomButton
                title="Submit"
                onPress={handleForgotPassword}
            />
        </SafeAreaView>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f8f9fa',
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
});
