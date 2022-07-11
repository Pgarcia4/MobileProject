import React from 'react'
import Select from 'react-select'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

export default function Schedule() {
    const [carrera, setCarrera] = React.useState('')
    const [materia, setMateria] = React.useState('')
    //const [name, setName] = React.useState("");
    //const [teacher, setTeacher] = React.useState("");
    //const [year, setYear] = React.useState("");
    //const [schedule, setSchedule] = React.useState("");
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ]

    return (
        <View>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Horarios de materias</Text>
            <View style={styles.select}>
                <Select
                    options={options}
                    onChange={(choice) => setCarrera(choice.value)}
                    placeholder={'Seleccionar carrera'}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 10,
                        color: 'white',
                        colors: {
                            ...theme.colors,
                            primary25: '#B4BAD9',
                            primary: '#878DAD',
                        },
                    })}
                />
            </View>
            <View style={styles.select}>
                <Select
                    options={options}
                    onChange={(choice) => setMateria(choice.value)}
                    placeholder={'Seleccionar materia'}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 10,
                        color: 'white',
                        colors: {
                            ...theme.colors,
                            primary25: '#B4BAD9',
                            primary: '#878DAD',
                        },
                    })}
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
