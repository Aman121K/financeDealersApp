import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../Screens/AuthScreen/Login";
import ForgotPassword from "../Screens/AuthScreen/ForgotPassword";
import HomeScreen from "../Screens/HomeScreen";
const Stack = createNativeStackNavigator();
const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default MainStack;