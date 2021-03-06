import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ListExams(name, examDate) {
    return (
        <View>
            <View style={styles.modal}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.examDate}>
                    Fecha del examen: {examDate}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        margin: 20,
        backgroundColor: '#B4BAD9',
        borderRadius: 10,
        top: 450,
    },
    name: {
        margin: 12,
        color: '#fff',
        fontSize: 25,
        fontWeight: '700',
    },
    examDate: {
        marginHorizontal: 12,
        marginVertical: 5,
    },
})
