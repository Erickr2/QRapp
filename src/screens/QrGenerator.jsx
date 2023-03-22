import React, { useState, useRef, createRef } from 'react';
import { View, Platform, PermissionsAndroid, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import QRCode from 'react-native-qrcode-svg'
import Share from 'react-native-share'
import RNFetchBlob from 'rn-fetch-blob'
import TextInput from 'react-native/Libraries/Components/TextInput/TextInput';

function QRgenerator() {

    const [QRvalue, setQRValue] = useState('');
    const [QRImage, setQRImage] = useState('');

    const reset = () => {
        setQRValue('')
    }


    const shareQR = () => {
        QRImage.toDataURL((data) => {
            const shareImageBase64 = {
                title: "QR",
                message: "Here is my QR code!",
                url: `data:image/jpeg;base64,${data}`
            };
            setQRImage(String(shareImageBase64.url));
            Share.open(shareImageBase64);
        })
    }

    const downloadQR = () => {
        QRImage.toDataURL(async (data) => {
            const shareImageBase64 = {
                title: "QR",
                message: "Here is my QR code!",
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
                            title: 'Storage Permission Required',
                            message: 'App needs access to your storage to download the QR code image',
                        }
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        console.log('Storage Permission Granted');
                        saveImage(String(shareImageBase64.url));
                    } else {
                        console.log('Storage Permission Not Granted');
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
                    title: '🎁 Here is your QR code!',
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
                value={QRvalue}
                onChangeText={(QRvalue) => setQRValue(QRvalue)}
                style={{ margin: 30, fontSize: 30 }}

            />

            <TextInput
                placeholder='Nombre del Alumno'
                value={QRvalue}
                onChangeText={(QRvalue) => setQRValue(QRvalue)}
                style={{ margin: 30, fontSize: 30 }}

            />

            <View style={{ ...styles.buttonView }}>

                <TouchableOpacity
                    onPress={downloadQR}
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