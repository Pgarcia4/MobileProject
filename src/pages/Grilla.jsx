import React from 'react'
import axiosInstance from '../utils/axiosConfigNetwork'
import {
    View,
    Image,
    StyleSheet,
    Text,
    ScrollView,
    ScrollViewBase,
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
import * as FileSystem from 'expo-file-system'
import 'react-native-gesture-handler'
import RNPickerSelect from 'react-native-picker-select'

const Grilla = () => {
    const [plan, setPlan] = React.useState('')
    const [carreer, setCarrera] = React.useState('')
    const [grid, setGrid] = React.useState('')
    const [link, setLink] = React.useState(
        'https://drive.google.com/uc?export=download&id=11YQvQS0KheqkMnt0qs0x_fxgVRAULo_X'
    )

    const planList = [
        {
            label: 'Plan 2022',
            value: '2022',
        },
    ]
    const carreerList = [
        {
            label: 'Ingeniería en informática',
            value: 'INF',
        },
        {
            label: 'Ingeniería industrial',
            value: 'IND',
        },
        {
            label: 'Ingeniería telemática',
            value: 'TEL',
        },
        {
            label: 'Ingeniería civil',
            value: 'CIV',
        },
    ];
    
    const getLink = () => {
      if(carreer && plan){
        axiosInstance
            .get(`https://project-um-app-mobile.herokuapp.com/api/grid/${plan}/${carreer}`,  {withCredentials: false})
            .then((res) => {
                setLink(res.data[0].link);
                console.log(res.data[0].link);
            })
            .catch(() => {
                setError('Error')
            })
        }
    }

    return (
        <View>
            <Text style={styles.title}>Grilla</Text>
            <View style={styles.select}>
               <RNPickerSelect
               placeholder={{ label: 'Seleccionar plan', value: null}}
               onValueChange={(value) => setPlan(value)}
               items={[
                {
                    label: 'Plan 2022',
                    value: '2022',
                },
                { label: 'Plan 2010',
                    value: '2010',
                },
            ]}
               />
            </View>
            <View style={styles.select}>
            <RNPickerSelect
               placeholder={{ label: 'Seleccionar carrera', value: null}}
               onValueChange={(value) => setCarrera(value)}
               items={[
                {
                  label: 'Ingeniería en informática',
                  value: 'INF',
              },
              {
                  label: 'Ingeniería industrial',
                  value: 'IND',
              },
              {
                  label: 'Ingeniería telemática',
                  value: 'TEL',
              },
              {
                  label: 'Ingeniería civil',
                  value: 'CIV',
              },]}
               />
                <Button
                    mode="contained"
                    color="#3C5ACF"
                    uppercase={false}
                    style={styles.button}
                    onPress={getLink}
                >
                    Buscar
                </Button>
                <View style={styles.planView}>
                    {link && 
                    <Image
                    resizeMode={'contain'}
                    style={styles.plan}
                    source={{uri: link}}
                    />
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    planView: {
        width: 300,
        height: 180,
        marginHorizontal: 'auto',
        marginTop: 22
    },
    plan: {
        width: 300,
        height: 180
    },
    button: {
        marginVertical: 42,
        width: '100%',
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
})

export default Grilla
