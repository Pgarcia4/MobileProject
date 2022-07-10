import React from 'react'
import Select from 'react-select'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import { Button } from 'react-native-paper'

export default function Exams() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    //const [name, setName] = React.useState("");
    //const [examDate, setExamDate] = React.useState("");

    return (
        <View>
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.title}>Fechas de examen</Text>
            <View style={styles.select}>
                <Select options={options} menuPortalTarget={document.body} 
    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }} placeholder={'Seleccionar carrera'} theme={(theme) => ({
                                                                                ...theme,
                                                                                borderRadius: 10,
                                                                                color: 'white',
                                                                                colors: {
                                                                                    ...theme.colors,
                                                                                    primary25: '#B4BAD9',
                                                                                    primary: '#878DAD',
                                                                                }})}
                />
            </View>
            <View style={styles.select}>
                <Select options={options} placeholder={'Seleccionar materia'} theme={(theme) => ({
                                                                                ...theme,
                                                                                borderRadius: 10,
                                                                                color: 'white',
                                                                                colors: {
                                                                                    ...theme.colors,
                                                                                    primary25: '#B4BAD9',
                                                                                    primary: '#878DAD',
                                                                                }})}
                />
                <Button mode="contained" color="#3C5ACF" uppercase={false} style={styles.button}>
                  Buscar
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 42,
        width: '100%'
    },
    logo: {
        width: 145,
        height: 65,
        marginLeft:6
    },
    select: {
        width: 300,
        marginHorizontal: 'auto',
        marginTop: 22,
    },
    title: {
        color: '#6380D5',
        fontWeight: 700,
        fontSize: 45,
        textAlign: 'center',
        marginVertical: 12
    }


})