import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

export default function Main({ navigation }) {
    function handleSchedule() {
        navigation.navigate('Schedule')
    }

    function handleExams() {
        navigation.navigate('Exams')
    }

    function handleCreateComplain() {
        navigation.navigate('createComplain')
    }

    function handleGrid() {
        navigation.navigate('Grilla')
    }

    return (
        <View>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Menu Principal</Text>
            <View style={styles.containerColumn}>
                <TouchableOpacity onPress={handleGrid} style={styles.button}>
                    <View style={styles.insideButton}>
                        <Ionicons size={54} name="grid" color="white" />
                        <Text style={styles.buttonText}>Grilla</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleExams} style={styles.button}>
                    <View style={styles.insideButton}>
                        <Ionicons size={54} name="calendar" color="white" />
                        <Text style={styles.buttonText}>Fechas de examen</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleCreateComplain}
                    style={styles.button}
                >
                    <View style={styles.insideButton}>
                        <Ionicons size={54} name="list" color="white" />
                        <Text style={styles.buttonText}>Reclamos</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSchedule}
                    style={styles.button}
                >
                    <View style={styles.insideButton}>
                        <Ionicons size={54} name="time" color="white" />
                        <Text style={styles.buttonText}>Horarios</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
        marginHorizontal: 6,
        backgroundColor: '#6380D5',
        height: 140,
        width: 140,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    insideButton: {
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 25,
        color: '#ffffff',
        //fontWeight: 'bold',
        textAlign: 'center',
    },
    containerColumn: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    logo: {
        width: 145,
        height: 65,
        marginLeft: 6,
    },
    title: {
        color: '#6380D5',
        fontWeight: '700',
        fontSize: 72,
        textAlign: 'center',
        marginVertical: 12,
    },
})
