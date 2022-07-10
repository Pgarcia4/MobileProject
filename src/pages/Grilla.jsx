import React from 'react';
import axiosInstance from '../axiosConfig/axiosConfigNetwork';
import { View, Image, StyleSheet, Text, ScrollView, ScrollViewBase } from 'react-native';
import { TextInput, Button  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/logo.png';
import DropDown from "react-native-paper-dropdown";
import {
  useFonts,
  Roboto_400Regular,
  Bangers_400Regular,
  OpenSans_400Regular
} from "@expo-google-fonts/dev";

const Grilla = () => {
    const [plan, setPlan] = React.useState("");
    const [carreer, setCarrera] = React.useState("");
    const [link, setLink] = React.useState("");
  
    const planList = [
      {
        label: "Plan 2022",
        value: "2022",
      }
    ];
    const carreerList = [
      {
        label: "Ingeniería en informática",
        value: "INFO",
      },
      {
        label: "Ingeniería industrial",
        value: "IND",
      },
      {
        label: "Ingeniería telemática",
        value: "TEL",
      },
      {
        label: "Ingeniería civil",
        value: "CIV",
      }
    ];

   

    axiosInstance
        .get('api/grid/', {
          plan,
          carreer,
        })
        .then((res) => {
          setLink(res.data)
        })
        .catch(() => {
          setError('Error');
        });
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
      
      /*try {
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
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.title}>Grilla</Text>
            <View style={styles.select}>
                <Select options={planList} menuPortalTarget={document.body} 
    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }} onChange={(choice) => setPlan(choice)} placeholder={'Seleccionar plan de estudio'} theme={(theme) => ({
                                                                                ...theme,
                                                                                borderRadius: 10,
                                                                                color: 'white',
                                                                                colors: {
                                                                                    ...theme.colors,
                                                                                    primary25: '#B4BAD9',
                                                                                    primary: '#878DAD',
                                                                                }})}
                />
            </View>
            <View style={styles.select}>
                <Select options={carreerList} onChange={(choice) => setPlan(choice)} placeholder={'Seleccionar carrera'} theme={(theme) => ({
                                                                                ...theme,
                                                                                borderRadius: 10,
                                                                                color: 'white',
                                                                                colors: {
                                                                                    ...theme.colors,
                                                                                    primary25: '#B4BAD9',
                                                                                    primary: '#878DAD',
                                                                                }})}
                />
                <Button mode="contained" color="#3C5ACF" uppercase={false} style={styles.button}>
                  Buscar
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 42,
        width: '100%'
    },
    logo: {
        width: 145,
        height: 65,
        marginLeft:6
    },
    select: {
        width: 300,
        marginHorizontal: 'auto',
        marginTop: 22,
    },
    title: {
        color: '#6380D5',
        fontWeight: 700,
        fontSize: 45,
        textAlign: 'center',
        marginVertical: 12
    }
})  

export default Grilla; 


    
