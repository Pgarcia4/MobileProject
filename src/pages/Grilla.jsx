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
    ]
    /*
    const getLink = () => {
      downloadResumable();
      /*axiosInstance
          .get(`api/grid/${plan}/${carreer}`)
          .then((res) => {
              setGrid(res.data)
          })
          .catch(() => {
              setError('Error')
          })
        }*/
    /*
    
      const callback = downloadProgress => {
        const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
        this.setState({
            downloadProgress: progress,
          });
      };
      const downloadResumable = FileSystem.createDownloadResumable(
        link,
        FileSystem.documentDirectory + carreer + '.pdf',
        {},
        callback
      );
        
      
      
      try {
        const { uri } = await downloadResumable.downloadAsync();
        console.log('Finished downloading to ', uri);
      } catch (e) {
        console.error(e);
      }
    

      try {
        await downloadResumable.pauseAsync();
        console.log('Paused download operation, saving for future retrieval');
        AsyncStorage.setItem('pausedDownload', JSON.stringify(downloadResumable.savable()));
      } catch (e) {
        console.error(e);
      }

      try {
        const { uri } = await downloadResumable.resumeAsync();
        console.log('Finished downloading to ', uri);
      } catch (e) {
        console.error(e);
      };*/

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
                            value: 'INFO',
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
                    ]}
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
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
