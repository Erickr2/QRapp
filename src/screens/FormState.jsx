import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { handleClick } from '../helpers/HandleClick';
import { useForm } from '../helpers/useForm';
import { QRgenerator } from './QrGenerator';



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
    textButton: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        alignSelf: 'center',
        borderRadius: 15,
    },
    bigText: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: "black"
    },
    input: {
        width: 230,
        height: 50,
        margin: 10,
        borderWidth: 4,
        padding: 10,
        alignSelf: 'center',
        borderColor: 'aliceblue',
        fontSize: 18
    },

})

const FormState = () => {


    /* const [Form, setForm] = useState({
        nombre: '', 
        matricula: ''
    });

    const {nombre, matricula} = Form

    const onInputChange = (name, value) => {
        setForm({
          ...Form,
          [name]: value
        })
      }


      const onClick = () => {
        console.log(Form)
      }   

      const reset = () => {
        setForm('')
      }
 */

      const [Nombre, setNombre] = useState('');
      const [Matricula, setMatricula] = useState('');
      const [Form, setForm] = useState('')
      

      const handle = (nombre,valor) => {
        setForm(
            {
                ...Form,
            [nombre]:valor
        })        
      }

      const reset = () => {
       console.log(JSON.stringify(Form, null, 2)),
       setForm('')
      }

    return (
        <View style={{ ...styles.view }}>

            <TextInput
                style={{ ...styles.input }}
                value={Form}
                placeholder="Ejemplo: ZLSIS2A"
                onChangeText={ (n)  => handle('nombre', n)}
            />

            <TextInput
                style={{ ...styles.input }}
                value={Form}
                placeholder="Ejemplo: ZLSIS2A"
                onChangeText={ (m)  => handle('matricula', m)}
            />

            <TouchableOpacity
                onPress={() => reset() } //aqui se puede probar el modulo de cvs
                style={{ ...styles.button }}
            >
                <Text
                    style={{ ...styles.textButton }}> Siguiente </Text>
            </TouchableOpacity>
        </View>
    )
}

export default FormState
