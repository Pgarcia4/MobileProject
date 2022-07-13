import React, { useEffect, useState } from 'react'
import { View, ScrollView, Image, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import axiosInstance from '../utils/axiosConfigNetwork';
import ListComplains from '../components/ListComplains';

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

    return (
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
        </ScrollView>
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
})
