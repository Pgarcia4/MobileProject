import React, { useEffect, useState } from 'react'
import { View, ScrollView, Image, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import axiosInstance from '../utils/axiosConfigNetwork'
import ListComplains from '../components/ListComplains'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Complains({ navigation }) {
    const [complains, setComplains] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axiosInstance
        .get(`https://project-um-app-mobile.herokuapp.com/api/claims`,  {withCredentials: false})
        .then((res) => {
            setComplains(res.data)
        })
        .catch(() => {
            setError('Error')
        });
    }, []);

    function handleCreateComplain() {
        navigation.navigate('CreateComplain')
    }

    function handleMain() {
        navigation.navigate('Main')
    }
    function handleBack() {
        navigation.goBack()
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
            <View style={styles.container}>
                {complains.map(complain => {
                    return (
                        <ListComplains complain={complain} />
                    )
                })}
            </View>
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
    },
})
