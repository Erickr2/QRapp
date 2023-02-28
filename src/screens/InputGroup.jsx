import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const xlsx = require('xlsx')

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

    const navigation = useNavigation();

    const students = [
        {name: 'erick', age: 21, num: 5534504494},
        {name: 'karen', age: 22, num: 5621250903 }
    ]

    const CreateFileExcel = () => {

   
    
        const WorkSheet = xlsx.utils.json_to_sheet(students);
        const WorkBook = xlsx.utils.book_new();
    
        xlsx.utils.book_append_sheet(WorkBook, WorkSheet, "students")
        xlsx.write(WorkBook,{bookType:"xlsx", type: "buffer"});
    
      xlsx.write(WorkBook, {bookType:'xlsx', type:'binary'});
      xlsx.writeFile(WorkBook, "AsistenciaDATA.xlsx")
    
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



            <TextInput
                style={{ ...styles.input }}
                onChangeText={onChangeText}
                value={text}
                placeholder="Ejemplo: ZLSIS2A"
            />

            <TouchableOpacity
            onPress={ () => CreateFileExcel(this)}
            style={{...styles.button}}
            >
                <Text
                style={{...styles.textAsis}}> Siguiente </Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputGroup
