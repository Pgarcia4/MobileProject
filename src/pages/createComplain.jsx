import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function createComplain({navigation}) {
    const [title, setTitle] = React.useState('')
    const [comment, setComment] = React.useState('')
    const [error, setError] = React.useState('')

    const handleCreateComplain = () => {
    
        if (title.length === 0) {
            console.log('Hola1')

            setError('Mail cannot be empty')
        } else if (comment.length === 0) {
            setError('Password cannot be empty')
        } else {
            axiosInstance
                .post('login', {
                    title,
                    comment,
                })
                .then(() => {
                    console.log('Hola')
                })
                .catch(() => {
                    setError('Error al guardar el reclamo')
                })
        }
    }

    function handleMain() {
        navigation.navigate('Main')
    }
    function handleBack() {
        navigation.goBack()
    }

    return (
        <SafeAreaView>
        <View>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Crear reclamo</Text>
            <View style={styles.container}>
            <TextInput
                label="Titulo"
                value={title}
                onChangeText={(title) => setTitle(title)}
                style={styles.input}
            />
            <TextInput
                multiline={true}
                numberOfLines={5}
                label="Comentario"
                value={comment}
                onChangeText={(comment) => setComment(comment)}
                style={styles.input}
            />
            <Button
                mode="contained"
                style={styles.button}
                color={'#3C5ACF'}
                uppercase={false}
            >
                Crear
            </Button>
            <Text style={styles.error}>{error}</Text>
            </View>
            <View style={styles.navContainer}>
                <Ionicons size={34} name="arrow-back" color="white"  onPress={handleBack} style={styles.backButton}/>
                <Ionicons size={34} name="home" color="white" onPress={handleMain} style={styles.homeButton}/>
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    secondButton: {
        backgroundColor: '#B4BAD9',
        marginHorizontal: 'auto',
        height: 35,
        width: 150,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 7,
    },
    button: {
        marginVertical: 42,
        marginHorizontal: 'auto',
        width: 300,
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
    input: {
        marginVertical: 10,
        marginHorizontal: 'auto',
        width: 300,
    },
    error: {
        fontSize: 20,
        color: '#F00',
    },
    navContainer: {
        backgroundColor: '#263F64',
        flexDirection: 'row',
        left: 0,
        bottom: 0,
        right: 0,
        padding: 10,
        position: "fixed",
        justifyContent: 'center'
    }, 
    homeButton: {
        marginLeft: 80
    },
    error: {
        fontSize: 20,
        color: '#F00',
    },
    container: {
        alignItems: 'center',
    }
})
