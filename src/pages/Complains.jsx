import React from 'react'
import { ScrollView, Image, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Complains({ navigation }) {
    const [error, setError] = React.useState('')
    function handleCreateComplain() {
        navigation.navigate('CreateComplain')
    }

    function handleMain() {
        navigation.navigate('Main')
    }
    function handleBack() {
        navigation.navigate('Main')
    }

    return (
        <SafeAreaView>
        <ScrollView>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <Button
                onPress={handleCreateComplain}
                mode="contained"
                color="#3C5ACF"
                uppercase={false}
                style={styles.button}
            >
                + Crear reclamo
            </Button>
            <View style={styles.navContainer}>
                <Ionicons size={34} name="arrow-back" color="white"  onPress={handleBack} style={styles.backButton}/>
                <Ionicons size={34} name="home" color="white" onPress={handleMain} style={styles.homeButton}/>
            </View>
        </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 32,
        marginLeft: 12,
        width: 160,
    },
    logo: {
        width: 145,
        height: 65,
        marginLeft: 6,
    },
    navContainer: {
        backgroundColor: '#263F64',
        flexDirection: 'row',
        top: 20,
        padding: 10,
    }, 
    backButton: {
        marginLeft: 150,
    },
    homeButton: {
        marginHorizontal: 140,
    },
    error: {
        fontSize: 20,
        color: '#F00',
    },
    container: {
        alignItems: 'center',
    },
})
