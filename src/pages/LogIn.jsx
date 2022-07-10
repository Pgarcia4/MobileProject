import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/logo.png';
import {
  useFonts,
  Roboto_400Regular,
  Bangers_400Regular,
  OpenSans_400Regular
} from "@expo-google-fonts/dev";
import Axios from "axios";

const LogIn = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const sendInfo = () => {
      Axios({
        method: "POST",
        data: {
          username: username,
          password: password,
        },
        withCredentials: true,
        url: "http://localhost:9000/api/login",
      }).then((res) => console.log(res));
    };
    
    const handleLogin = () => {
        const navigation = useNavigation();
        navigation.navigate('Home');
        console.log(username, password);
      };

    const getUser = () => {
      Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/user",
      }).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    };


      return (
          <ScrollView contentContainerStyle={styles.container}>
              <Image source={Logo} resizeMode="contain" style={styles.logo} />
              <View style={styles.container2}>
                <View style={styles.textView}>
                  <TextInput label='Nombre de usuario'
                      value={username}
                      onChangeText={username => setUsername(username)}
                      style={styles.input}
                      activeUnderlineColor="#3C5ACF"  
                      underlineColor="#3C5ACF" 
                  />
                </View>
                <View style={styles.textView}>
                  <TextInput label='Contraseña'
                      value={password}
                      onChangeText={password => setPassword(password)}
                      style={styles.input}
                      secureTextEntry={true}
                      activeUnderlineColor="#3C5ACF"  
                      underlineColor="#3C5ACF" 
                  />
                </View>
                <Button mode="contained" onPress={sendInfo} style={styles.button} color="#3C5ACF" uppercase={false}>
                  Log in
                </Button>
              </View>
          </ScrollView>
      );
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          padding: 20,
          width:'100%',
          height: '100%',
          backgroundColor: 'white'
        },
        container2:{
          flex: 1,
          marginTop:'20%',
          width: '80%',
          //alignItems: 'center',
          //justifyContent: 'center', //Centered horizontally
        },
        logo: {
          width: 290,
          height: 130,
          alignContent: 'center',
          marginTop: '25%'
        },
        input: {
          marginVertical: 10,
          width: '100%'
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
          alignContent: "flex-start"
        }
      });
      export default LogIn;