import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Welcome from '../src/screens/Welcome'
import InputG from '../src/screens/InputGroup'
import QrGenerator from '../src/screens/QrGenerator';

const WelcomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    barcodeRecognized = ({ barcodes }) => {
        barcodes.forEach(barcode => console.warn(barcode.data))
    };
    return (
        <WelcomeStackNavigator.Navigator
            initialRouteName='WelcomeScreen'
            screenOptions={{
                headerShown: false
            }}
        >

            <WelcomeStackNavigator.Screen
                name='WelcomeScreenÂˇ'
                component={Welcome}
            />

            <WelcomeStackNavigator.Screen
                name='Input Group'
                component={InputG}
            />

            <WelcomeStackNavigator.Screen
                name='QRgenerator'
                component={QrGenerator}
            />


        </WelcomeStackNavigator.Navigator>



    )
}

const tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <tab.Screen name='Welcome' component={MyStack} />
            <tab.Screen name='InputGroup' component={InputG} />
            <tab.Screen name='QRgenerator' component={QrGenerator} />
        </tab.Navigator>
    )
}


const MainStack = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}

export default MainStack
