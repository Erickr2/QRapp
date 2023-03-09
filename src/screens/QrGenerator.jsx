import React, { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import QrCode from 'react-native-qrcode-svg';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white',
    },
    viewQR: {
        alignItems: 'center',
        marginTop: 150
    },
    button: {
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        width: '40%',
        backgroundColor: 'darkgrey',
        margin: 25
    },
    textButton: {
        fontSize: 22,
        textAlign: 'center',
        color: 'black',
    },
    input: {
        width: 230,
        height: 50,
        borderWidth: 2,
        alignSelf: 'center',
        borderColor: 'aliceblue',
        fontSize: 20,
        margin: 5
    },
    textDescription: {
        fontSize: 21,
        alignSelf: 'center',
        fontWeight: 'bold',
        margin: 20
    }

})

const QrGenerator = () => {

    const [inputText, setInputText] = useState('');
    const [qrvalue, setQrvalue] = useState('');
    const [qrvalue2, setQrvalue2] = useState('');

    return (
        <View style={{ ...styles.view }}>
            <View style={{ ...styles.viewQR }}>

                <QrCode
                    value={qrvalue ? qrvalue : 'NA'}
                    size={250}
                    color="black"
                    backgroundColor="white"
                    style={{ alignSelf: 'center' }}
                />
            </View>

            <Text style={{...styles.textDescription}}>
                Inserte la información que se le pide a contuniación.
            </Text>
            <TextInput
                style={{...styles.input}}
                onChangeText={
                    (inputText) => setInputText(inputText)
                }
                placeholder="Nombre del alumno"
                value={inputText}
            />

            <TextInput
                style={{...styles.input}}
                onChangeText={
                    (inputText) => setInputText(inputText)
                }
                placeholder="ID del grupo"
                value={inputText}
            />

            <TouchableOpacity
                onPress={() => setQrvalue(inputText)}
                style={{ ...styles.button }}
            >
                <Text
                    style={{ ...styles.textButton }}> Siguiente </Text>
            </TouchableOpacity>
        </View>
    )
}

export default QrGenerator
