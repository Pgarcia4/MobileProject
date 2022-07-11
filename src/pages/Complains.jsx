import React from 'react'
import { ScrollView, Image, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

export default function Complains() {
    function handleCreateComplain() {
        const navigation = useNavigation()
        navigation.navigate('createComplain')
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
