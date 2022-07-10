import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

export default function ListComplains(title, comment, img) {

    return (
        <View>
            <View style={styles.modal}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.comment}>
                    {comment}
                </Text>
                <Image source={img} style={styles.image}></Image>
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
    title: {
        margin: 12,
        color: '#fff',
        fontSize: 25,
        fontWeight: 700
    },
    comment: {
        marginHorizontal: 12,
        marginVertical: 5
    },
    image: {
        marginHorizontal: 'auto',
        marginVertical: 10,
        objectFit: 'contain',
        height: 200,
        width: 250
    }
})