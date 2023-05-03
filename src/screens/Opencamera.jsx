import { Text } from '@rneui/themed'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Alert, TouchableOpacity, ToastAndroid } from 'react-native'
import { RNCamera } from 'react-native-camera'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { Prueba } from './prueba'
import { Button } from 'react-native-share'
import { useNavigation } from '@react-navigation/native'
import { exportDataToExcel } from '../helpers/CreateExel'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white'
  },
  button: {
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    width: '40%',
    backgroundColor: 'darkgrey',
    marginBottom: 50,

  },
  textButton: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center',
    borderRadius: 15,
  }

})

export const Opencamera = ( { navigation, route }) => {


  const {grupo} = route.params;  

  const [Data, setData] = useState([]);

  const handle = ( alumnos ) => {
    Data.includes(alumnos) ? '' : setData([ alumnos,...Data]);
    console.log(Data);
  }
  
    return (
      <View style={{...styles.view}}>
        <QRCodeScanner
          onRead={({ data }) => handle(data, ToastAndroid.show(`Se capturo el alumno correctamente`, ToastAndroid.TOP))}
          flashMode={RNCamera.Constants.FlashMode.off}
          reactivate={true}
          reactivateTimeout={500}
          cameraProps={String}
          
        />
        <TouchableOpacity
          style={{ ...styles.button}}
          onPress={() => exportDataToExcel(Data, grupo, ToastAndroid.show('Documento descargado, revise sus archivos', ToastAndroid.CENTER, navigation.navigate('WelcomeScreen')))}
        >
          <Text  style={{ ...styles.textButton }}>Finalizar</Text>
        </TouchableOpacity>
      </View>
  
    )
  }

  


