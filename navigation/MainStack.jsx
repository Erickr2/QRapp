import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/Ionicons'

//screens
import Welcome from '../src/screens/Welcome'
import InputG from '../src/screens/InputGroup'
import QrGenerator from '../src/screens/QrGenerator'
import { Opencamera } from '../src/screens/Opencamera';




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
                name='WelcomeScreen'
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
            <WelcomeStackNavigator.Screen
                            name='Camera'
                            component={Camera}
                        />

            <WelcomeStackNavigator.Screen
                name='Camera'
                component={Opencamera}
            />

        </WelcomeStackNavigator.Navigator>
    )
}

const tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {

                    switch (route.name) {
                        case 'Inicio':
                            iconName = focused ? 'home' : 'home-outline'
                            break;
                        case 'Captura de grupo':
                            iconName = focused ? 'create' : 'create-outline'
                            break;
                        case 'Generador Qr':
                            iconName = focused ? 'qr-code' : 'qr-code-outline'
                        case 'Camera':
                            iconName = focused ? 'camera' : 'camera-outline'
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                }
            })}
        >
            <tab.Screen name='Inicio' component={MyStack} />
            <tab.Screen name='Captura de grupo' component={InputG} />
            <tab.Screen name='Camera' component={Opencamera} />
            <tab.Screen name='Generador Qr' component={QrGenerator} />
            <tab.Screen name='Camera' component={Camera} />


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
