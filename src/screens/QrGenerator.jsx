import React, { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import QrCode from 'react-native-qrcode-svg';

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        width: '40%',
        backgroundColor: 'darkgrey',
        margin: 25

    },
    view: {
        flex: 1,
        backgroundColor: 'white'
    },
        
})

const QrGenerator = () => {

    const [inputText, setInputText] = useState('');
    const [qrvalue, setQrvalue] = useState('');

    return (
        <View>
            <QrCode
                value={qrvalue ? qrvalue : 'NA'}
                size={250}
                color="black"
                backgroundColor="white"
            />

            <Text style={{}}>
                Please insert any value to generate QR code
            </Text>
            <TextInput
                style={{}}
                onChangeText={
                    (inputText) => setInputText(inputText)
                }
                placeholder="Enter Any Value here"
                value={inputText}
            />

            <TouchableOpacity
                onPress={() => setQrvalue(inputText)}
                style={{ ...styles.button }}
            >
                <Text
                    style={{ ...styles.textAsis }}> Siguiente </Text>
            </TouchableOpacity>
        </View>
    )
}

export default QrGenerator
