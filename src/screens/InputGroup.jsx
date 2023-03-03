import { FileSystemSessionType } from 'expo-file-system';
import React from 'react';
import { Image, PermissionsAndroid, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const RNFS = require('react-native-fs');
import XLSX from 'xlsx';

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
    textAsis: {
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        alignSelf: 'center',
        borderRadius: 15,
    },
    textEmp: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: "black"
    },
    input: {
        width: 230,
        height: 50,
        margin: 50,
        borderWidth: 4,
        padding: 10,
        alignSelf: 'center',
        borderColor: 'aliceblue',
        fontSize: 18
    },

})

const InputGroup = () => {

    const [text, onChangeText] = React.useState('');

    const exportDataToExcel = () => {
      
        
    // Created Sample data
    let sample_data_to_export = [{id: '1', name: 'First User'},{ id: '2', name: 'Second User'}];

    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(sample_data_to_export)    
    XLSX.utils.book_append_sheet(wb,ws,"Users")
    const wbout = XLSX.write(wb, {type:'binary', bookType:"xlsx"});


    // Write generated excel to Storage
    RNFS.writeFile(RNFS.DownloadDirectoryPath + '/Data.csv', wbout, 'ascii')
    .then((r)=>{
     console.log('Success');
    }).catch((e)=>{
      console.log('Error', e);
    });

  }
  const handleClick = async () => {

    try{
      // Check for Permission (check if permission is already given or not)
      let isPermitedExternalStorage = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);

      if(!isPermitedExternalStorage){

        // Ask for permission
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Storage permission needed",
            message:'permitir uso de camara',
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );

        
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Permission Granted (calling our exportDataToExcel function)
          exportDataToExcel();
          console.log("Permission granted");
        } else {
          // Permission denied
          console.log("Permission denied");
        }
      }else{
         // Already have Permission (calling our exportDataToExcel function)
         exportDataToExcel();
      }
    }catch(e){
      console.log('Error while checking permission');
      console.log(e);
      return
    }
    
    }


    return (
        <View style={{ ...styles.view }}>
            <Image
                style={{ width: 250, height: 250, alignSelf: 'center', margin: 20 }}
                source={{ uri: 'https://www.enroll-u.com/_i/5/4/c9c90872-4cfb-11e9-92e9-0231b47980f0.jpeg?w=276&h=276&fit=crop&s=276' }}
            />

            <Text style={{ ...styles.textEmp }}>
                Ingresa el
            </Text>
            <Text style={{ ...styles.textEmp }}>
                ID del
            </Text>
            <Text style={{ ...styles.textEmp }}>
                grupo
            </Text>

            <TouchableOpacity
                onPress={() => handleClick()}
                style={{ ...styles.button }}
            >
                <Text
                    style={{ ...styles.textAsis }}> Siguiente </Text>
            </TouchableOpacity>

            <TextInput
                style={{ ...styles.input }}
                onChangeText={onChangeText}
                value={text}
                placeholder="Ejemplo: ZLSIS2A"
            />

          
        </View>
    )
}

export default InputGroup
