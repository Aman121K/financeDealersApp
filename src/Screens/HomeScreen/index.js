import React from "react";
import { Linking, SafeAreaView, Text, Touchable, TouchableOpacity } from 'react-native';
const HomeScreen = () => {
    const openPaymentsApp = () => {
        Linking.openURL('https://stackoverflow.com/questions/42536216/how-to-open-an-external-app-from-react-native-app')
    }
    return (
        <SafeAreaView>
            <Text>This is home page</Text>
            <TouchableOpacity onPress={(() => openPaymentsApp())}>
                <Text>Pay Button</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default HomeScreen;