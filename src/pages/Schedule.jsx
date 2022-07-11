import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import RNPickerSelect from 'react-native-picker-select';
import axiosInstance from '../utils/axiosConfigNetwork';

export default function Schedule({ navigation }) {
    const [carrera, setCarrera] = React.useState('')
    const [materia, setMateria] = React.useState('')
    //const [name, setName] = React.useState("");
    //const [teacher, setTeacher] = React.useState("");
    //const [year, setYear] = React.useState("");
    //const [schedule, setSchedule] = React.useState("");

    const handleSchedule = () => {
        console.log(mail)
        console.log(password)

        if (mail.length === 0) {
            console.log('Hola1')

            setError('Mail cannot be empty')
        } else if (password.length === 0) {
            setError('Password cannot be empty')
        } else {
            axiosInstance
                .post('login', {
                    mail,
                    password,
                })
                .then(() => {
                    console.log('Hola')
                    signIn({ mail, password })
                })
                .catch(() => {
                    setError('Error en el usuario o la contraseña')
                    console.log(error)
                })
        }
    }

    const carreerList = [
        {
            label: 'Ingeniería en informática',
            value: 'INFO',
        },
        {
            label: 'Ingeniería industrial',
            value: 'IND',
        },
        {
            label: 'Ingeniería telemática',
            value: 'TEL',
        },
        {
            label: 'Ingeniería civil',
            value: 'CIV',
        },
    ]

    return (
        <View>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Horarios de materias</Text>
            <View style={styles.select}>
               <RNPickerSelect
               placeholder={{ label: 'Seleccionar carrera', value: null}}
               onValueChange={(value) => setCarrera(value)}
               items={carreerList}
               />
            </View>
            <View style={styles.select}>
                <RNPickerSelect
                placeholder={{ label: 'Seleccionar materia', value: null}}
                onValueChange={(value) => setMateria(value)}
                items={[
                    {
                        label: 'Materia 1',
                        value: 'm1',
                    }]}
                />
                <Button
                    mode="contained"
                    color="#3C5ACF"
                    uppercase={false}
                    style={styles.button}
                >
                    Buscar
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 32,
        width: '100%',
    },
    logo: {
        width: 145,
        height: 65,
        marginLeft: 6,
    },
    select: {
        width: 300,
        marginHorizontal: 'auto',
        marginTop: 22,
    },
    title: {
        color: '#6380D5',
        fontWeight: '700',
        fontSize: 45,
        textAlign: 'center',
        marginVertical: 12,
    },
})
