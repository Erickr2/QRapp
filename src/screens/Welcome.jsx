import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import InputGroup from './InputGroup'


const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        width: '30%',
    },
    view: {
     flex: 1,
     backgroundColor: '#003593'
    }, 
    textAsis: {
        fontSize: 45,
        textAlign: 'center',
        color: 'aliceblue'
    },
    textEmp: {
        fontSize: 20,
        textAlign: 'center'
    }
  })

export const Welcome = () => {

    const navigation = useNavigation();

  return (
    <View style={{...styles.view}}>

    <Image
    style={{ width: 412, height: 312, marginBottom: 15, }}
    source = {{uri: 'https://utc.mx/wp-content/uploads/2020/02/BECA-UTC.jpg'}}
    />
<Text
style={{
    ...styles.textAsis
}}
>Asistencia</Text>
<Image
style={{}}
source={{}} 
/>

<TouchableOpacity
onPress={ () => navigation.navigate("Input Group")}
style={{
    ...styles.button,
    backgroundColor: '#f0ffff',
    margin: 300
}}

>
    <Text
    style={{ ...styles.textEmp }}
    >Empezar</Text>
</TouchableOpacity>
    </View>
  )
}

export default Welcome
