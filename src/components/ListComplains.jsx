import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ListComplains = ({complain}) => {
    React.useEffect(() => {
        console.log(complain)
      });
    return (
        <View>
            <View style={styles.modal}>
                <Text style={styles.title}>{complain.title}</Text>
                <Text style={styles.userMail}>{complain.userMail}</Text>
                <Text style={styles.comment}>{complain.message}</Text>
                <Image source={complain.img ? complain.img : "https://www.wikihow.com/images/4/47/769114-10.jpg"} style={styles.image}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        margin: 20,
        backgroundColor: '#B4BAD9',
        borderRadius: 10,
    },
    title: {
        margin: 12,
        color: '#fff',
        fontSize: 25,
        fontWeight: '700',
    },
    userMail: {
        marginHorizontal: 12,
        color: "#7f8285",
        fontStyle: "italic"
    },
    comment: {
        marginHorizontal: 12,
        marginVertical: 5,
    },
    image: {
        marginHorizontal: 'auto',
        marginVertical: 10,
        objectFit: 'contain',
        height: 200,
        width: 250,
    },
})

export default ListComplains;
