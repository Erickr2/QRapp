import React from 'react'
import { Text, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
const Prueba = () => {

        return (
            <View>
                <Text>WAKE UP NEO..</Text>
                <RNCamera
                ref={ref => {
                              this.camera = ref;
                            }}
                            style={{
                              flex: 1,
                              width: '100%',
                             }}
                             onGoogleVisionBarcodesDetected={this.barcodeRecognized}
                >
                </RNCamera>
            </View>
          );

  
}

export default Prueba
