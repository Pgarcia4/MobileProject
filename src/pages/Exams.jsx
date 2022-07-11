import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView } from 'react-native-safe-area-context'
import axiosInstance from '../utils/axiosConfigNetwork';


export default function Exams({ navigation }) {
    const [carrera, setCarrera] = React.useState('')
    const [materia, setMateria] = React.useState('')
    const [error, setError] = React.useState('')
    const [subjects, setSubjects] = React.useState("");

    //const [name, setName] = React.useState("");
    //const [examDate, setExamDate] = React.useState("");

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

    const handleCareer = (carrera) => {
        console.log(carrera)
        if (carrera.length === 0) {
            setError('Debes elegir una opción');
        } else {
            axiosInstance
            .get(`https://project-um-app-mobile.herokuapp.com/api/subjectCareer/${carrera}`, {withCredentials: false})
            .then((res) => {
                for (let i = 0; i < res.data.length; i++) {
                    subjectList.push({ label: res.data[i].name, value: res.data[i].name})
                }
                setSubjects(subjectList)
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

    const subjectList = []

    return (
        <SafeAreaView>
        <View>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Fechas de examen</Text>
            <View style={styles.container}>
            <View style={styles.select}>
               <RNPickerSelect
               placeholder={{ label: 'Seleccionar carrera', value: null}}
               onValueChange={(value) => handleCareer(value)}
               items={carreerList}
               />
            </View>
            <View style={styles.select}>
                <RNPickerSelect 
                placeholder={{ label: 'Seleccionar materia', value: null}}
                onValueChange={(value) => setMateria(value)}
                items={subjects}
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
        marginVertical: 42,
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
