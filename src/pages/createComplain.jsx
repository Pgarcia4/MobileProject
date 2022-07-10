import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { TextInput, Button } from 'react-native-paper';

export default function createComplain() {
    const [title, setTitle] = React.useState("");
    const [comment, setComment] = React.useState("");

    return (
        <View>
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.title}>Crear reclamo</Text>
            <TextInput label='Titulo'
                      value={title}
                      onChangeText={title => setTitle(title)}
                      style={styles.input}
            />
            <TextInput multiline={true} 
                       numberOfLines={5}
                       label='Comentario'
                       value={comment}
                       onChangeText={comment => setComment(comment)}
                       style={styles.input}
            />
            <TouchableOpacity style={styles.secondButton}>
                    <Text style={styles.buttonText}>Subir archivo</Text>
            </TouchableOpacity>
            <Button mode="contained" style={styles.button} color={'#3C5ACF'} uppercase={false}>
                Crear
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    secondButton: {
        backgroundColor: '#B4BAD9',
        marginHorizontal: 'auto',
        height: 35,
        width: 150
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 7
    },
    button: {
        marginVertical: 42,
        marginHorizontal: 'auto',
        width: 300
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
    },
    input: {
        marginVertical: 10,
        marginHorizontal: 'auto',
        width: 300
    }
})