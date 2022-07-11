import React, { useContext, createContext, useState } from 'react'
import {
    View,
    Image,
    StyleSheet,
    Text,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../assets/logo.png'
import {
    useFonts,
    Roboto_400Regular,
    Bangers_400Regular,
    OpenSans_400Regular,
} from '@expo-google-fonts/dev'
import axiosInstance from '../utils/axiosConfigNetwork'
import { AuthContext } from '../navigation/StackNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'

const LogIn = () => {
    const [mail, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { signIn } = useContext(AuthContext)

    const handleLogin = () => {
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

    return (
        <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={Logo} resizeMode="contain" style={styles.logo} />
            <View style={styles.container2}>
                <View style={styles.textView}>
                    <TextInput
                        label="Mail de usuario"
                        value={mail}
                        onChangeText={(mail) => setEmail(mail)}
                        style={styles.input}
                        activeUnderlineColor="#3C5ACF"
                        underlineColor="#3C5ACF"
                    />
                </View>
                <View style={styles.textView}>
                    <TextInput
                        label="Contraseña"
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        style={styles.input}
                        secureTextEntry={true}
                        activeUnderlineColor="#3C5ACF"
                        underlineColor="#3C5ACF"
                    />
                </View>
                <Button
                    mode="contained"
                    onPress={handleLogin}
                    style={styles.button}
                    color="#3C5ACF"
                    uppercase={false}
                >
                    Log in
                </Button>
                <Text style={styles.error}>{error}</Text>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    container2: {
        flex: 1,
        marginTop: '20%',
        width: '80%',
        //alignItems: 'center',
        //justifyContent: 'center', //Centered horizontally
    },
    logo: {
        width: 290,
        height: 130,
        alignContent: 'center',
        marginTop: '25%',
    },
    input: {
        marginVertical: 10,
        width: '100%',
    },
    button: {
        marginVertical: 10,
        width: '100%',
    },
    texts: {
        fontFamily: Roboto_400Regular,
        fontSize: 20,
    },
    textView: {
        padding: 10,
        width: '100%',
        //alignItems: "left",
        alignContent: 'flex-start',
    },
    error: {
        fontSize: 20,
        color: '#F00',
    },
})
export default LogIn
