import React, { useState, useRef, createRef } from 'react';
import { View, Platform, PermissionsAndroid, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import QRCode from 'react-native-qrcode-svg'
import RNFetchBlob from 'rn-fetch-blob'
import TextInput from 'react-native/Libraries/Components/TextInput/TextInput';

function QRgenerator() {

    const [QRvalue, setQRValue] = useState('');
    const [QRImage, setQRImage] = useState('');
    const [Form, setForm] = useState('')

    const downloadQR = () => {

        QRImage.toDataURL(async (data) => {
            const shareImageBase64 = {
                title: "QR",
                message: "Este es mi Qr!",
                url: `data:image/jpeg;base64,${data}`
            };
            setQRImage(String(shareImageBase64.url))

            if (Platform.OS === 'ios') {
                saveImage(String(shareImageBase64.url));
            } else {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                        {
                            title: 'Permiso de almacenamiento requerido',
                            message: 'La aplicación necesita acceso a su almacenamiento para descargar la imagen del código QR',
                        }
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        console.log('Permiso de almacenamiento concedido');
                        saveImage(String(shareImageBase64.url));
                    } else {
                        console.log('Permiso de almacenamiento denegado');
                    }
                } catch (err) {
                    console.log(err)
                }
            }
        });
    }


    const saveImage = (qr) => {
        qr = qr.split('data:image/jpeg;base64,')[1]

        let date = new Date();
        const { fs } = RNFetchBlob;
        let filename = '/qr_' + Math.floor(date.getTime() + date.getSeconds() / 2) + '.jpeg';
        let PictureDir = fs.dirs.DownloadDir + filename;

        fs.writeFile(PictureDir, qr, 'base64')
            .then(() => {
                RNFetchBlob.android.addCompleteDownload({
                    title: 'Aquí está su código QR!',
                    useDownloadManager: true,
                    showNotification: true,
                    notification: true,
                    path: PictureDir,
                    mime: 'image/jpeg',
                    description: 'Image',
                });
            })
            .catch((err) => { console.log('ERR: ', err) })
    }

    const handle = (nombre, valor) => {
        setForm(
            {
                ...Form,
                [nombre]: valor
            }),
            setQRValue(JSON.stringify(Form, null, 2))
    }

    return (
        <View style={styles.container}>

            <QRCode
                value={QRvalue ? QRvalue : 'NA'}
                size={200}
                logoSize={60}
                logoBackgroundColor='transparent'
                getRef={(ref) => setQRImage(ref)}
            />

            <TextInput
                placeholder='Nombre del Alumno'
                value={Form}
                onChangeText={(nombre) => handle('nombre', nombre)}
                style={{ margin: 20, fontSize: 30, textAlign: 'center' }}

            />

            <TextInput
                placeholder='Matricula'
                value={Form}
                onChangeText={(matricula) => handle('matricula', matricula)}
                style={{ margin: 20, fontSize: 30, textAlign: 'center' }}

            />

            <TextInput
                placeholder='Ciclo escolar'
                value={Form}
                onChangeText={(ciclo) => handle('ciclo escolar', ciclo)}
                style={{ margin: 20, fontSize: 30, textAlign: 'center' }}

            />

            <View style={{ ...styles.buttonView }}>

                <TouchableOpacity
                    onPress={() => downloadQR(setForm(''))}
                    style={{ ...styles.button }}
                >
                    <Text
                        style={{ ...styles.textButton }}> Descargar Qr </Text>
                </TouchableOpacity>
            </View>



        </View>
    );
}

export default QRgenerator
