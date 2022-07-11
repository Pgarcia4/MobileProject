import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import RNPickerSelect from 'react-native-picker-select';
import axiosInstance from '../utils/axiosConfigNetwork';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Schedule({ navigation }) {
    const [carrera, setCarrera] = React.useState('')
    const [materia, setMateria] = React.useState('')
    const [error, setError] = React.useState('')
    //const [name, setName] = React.useState("");
    //const [teacher, setTeacher] = React.useState("");
    //const [year, setYear] = React.useState("");
    const [schedule, setSchedule] = React.useState("");
    const [subjects, setSubjects] = React.useState("");

    const handleSchedule = () => {
        if (carrera.length === 0) {
            setError('Debes elegir una opción');
        } else if (materia.length === 0) {
            setError('Debes elegir una opción');
        } else {
            axiosInstance
            .get(`api/subject/${materia}/${carrera}`)
            .then((res) => {
                setSubjects(res.data)
            })
            .catch(() => {
                setError('Error')
            })
        }
    }

    const handleSubject = (carrera) => {
        console.log(carrera)
        if (carrera.length === 0) {
            setError('Debes elegir una opción');
        } else {
            axiosInstance
            .get(`api/subject/${carrera}`)
            .then((res) => {
                setSchedule(res.data)
            })
            .catch(() => {
                setError('Error')
            })
        }
    }

    const carreerList = [
        {
            label: 'Ingeniería en informática',
            value: 'INF',
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
        <SafeAreaView>
        <View>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Horarios de materias</Text>
            <View style={styles.container}>
            <View style={styles.select}>
               <RNPickerSelect
               onValueChange={(value) => handleSubject(value)}
               items={carreerList}
               
               />
            </View>
            <View style={styles.select}>
                <RNPickerSelect
                onValueChange={(value) => setMateria(value)}
                items={carreerList}
                />
                <Button
                    mode="contained"
                    color="#3C5ACF"
                    uppercase={false}
                    style={styles.button}
                >
                    Buscar
                </Button>
                <Text style={styles.error}>{error}</Text>
            </View>
            </View>
        </View>
        </SafeAreaView>
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
    error: {
        fontSize: 20,
        color: '#F00',
    },
    container: {
        alignItems: 'center',
    }
})
