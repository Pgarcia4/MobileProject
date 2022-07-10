import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default function ListSchedules(name, teacher, year, schedule) {

    return (
        <View>
            <View style={styles.modal}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.teacher}>
                    {teacher}
                </Text>
                <Text style={styles.year}>
                    {year}
                </Text>
                <Text style={styles.schedule}>
                    {schedule}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        margin: 20,
        backgroundColor: '#B4BAD9',
        borderRadius: 10
    },
    name: {
        margin: 12,
        color: '#fff',
        fontSize: 25,
        fontWeight: 700
    },
    teacher: {
        marginHorizontal: 12,
        marginVertical: 5
    },
    year: {
        marginHorizontal: 12,
        marginVertical: 5
    },
    schedule: {
        marginHorizontal: 12,
        marginVertical: 5
    }
})

const [name, setName] = React.useState("");
const [teacher, setTeacher] = React.useState("");
const [year, setYear] = React.useState("");
const [schedule, setSchedule] = React.useState("");