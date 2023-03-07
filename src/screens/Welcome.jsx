import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import InputGroup from './InputGroup'


const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        borderRadius: 15,
        paddingVertical: 15,
        width: '40%',
        backgroundColor: '#f0ffff',
        margin: 21
    },
    view: {
        flex: 1,
        backgroundColor: '#003593'
    },
    textAsis: {
        fontSize: 50,
        textAlign: 'center',
        color: 'aliceblue',
        fontWeight: 'bold'
    },
    textEmp: {
        fontSize: 22,
        textAlign: 'center',
        color: 'black',
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row'

    }
    
})

export const Welcome = () => {

    const navigation = useNavigation();

    return (
        <View style={{ ...styles.view }}>

            <Image
                style={{ width: 512, height: 312, alignSelf: 'center' }}
                source={require('../imgs/logoUTC.png')}
            />

            <Text
                style={{
                    ...styles.textAsis
                }}
            >Asistencia</Text>

            <Image
                style={{ width: 250, height: 230, alignSelf: 'center', marginTop: 40 }}
                source={require('../imgs/Asis.png')}
            />

            <View style={{...styles.buttonView}}>

            <TouchableOpacity
                onPress={() => navigation.navigate("Input Group")}
                style={{
                    ...styles.button,

                }}

            >
                <Text
                    style={{ ...styles.textEmp }}
                >Empezar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("QRgenerator")}
                style={{
                    ...styles.button,

                }}
            >
                <Text
                    style={{ ...styles.textEmp }}
                >Generar QR</Text>
            </TouchableOpacity>
            </View>


           
        </View>
    )
}

export default Welcome
