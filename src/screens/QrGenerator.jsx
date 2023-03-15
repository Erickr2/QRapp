import React, { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import QrCode from 'react-native-qrcode-svg';
const RNFS = require('react-native-fs');


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
        borderRadius: 15,
        paddingVertical: 15,
        width: '40%',
        backgroundColor: 'blue',
        margin: 21
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
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row'

    }

})



const QrGenerator = (initialInput = '') => {

    const [inputText, setInputText] = useState(initialInput);
    const [qrvalue, setQrvalue] = useState('');

    const reset = () => {
        setInputText(initialInput)
    }

    const DownloadQr = (inputText) => {
        RNFS.writeFile(RNFS.DownloadDirectoryPath + `/${inputText}.png`, QrCode, 'ascii')
        .then((r)=>{
         console.log('QR descargado');
        }).catch((e)=>{
          console.log('Error', e);
        });
    } 

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

            <Text style={{ ...styles.textDescription }}>
                Inserte la información que se le pide a contuniación.
            </Text>

            <TextInput
                style={{ ...styles.input }}
                placeholder="Nombre del alumno"
                value={inputText}
                onChangeText={
                    (inputText) => setInputText(inputText)
                }
            />

            <View style={{ ...styles.buttonView}}>
            <TouchableOpacity
                onPress={() => setQrvalue(inputText, reset())}
                style={{ ...styles.button }}
            >
                <Text
                    style={{ ...styles.textButton }}> Crear Qr </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => DownloadQr(reset())}
                style={{ ...styles.button }}
            >
                <Text
                    style={{ ...styles.textButton }}> Descargar Qr </Text>
            </TouchableOpacity>
            </View>

            
        </View>
    )
}

export default QrGenerator
