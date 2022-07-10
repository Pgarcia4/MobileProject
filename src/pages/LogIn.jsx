import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView, ScrollViewBase } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/logo.png';
import {
  useFonts,
  Roboto_400Regular,
  Bangers_400Regular,
  OpenSans_400Regular
} from "@expo-google-fonts/dev";


const LogIn = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");


    const handleLogin = () => {
        const navigation = useNavigation();
        navigation.navigate('Home');
        console.log(username, password);
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
                  />
                </View>
                <View style={styles.textView}>
                  <TextInput label='Contraseña'
                      value={password}
                      onChangeText={password => setPassword(password)}
                      style={styles.input}
                  />
                </View>
                <Button mode="contained" onPress={handleLogin} style={styles.button} color="#3C5ACF" uppercase={false}>
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
          marginTop:20,
          width: '80%'
        },
        logo: {
          width: 290,
          height: 130,
          alignContent: 'center',
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
          alignItems: "left",
          alignContent: "flex-start"
        }
      });
      export default LogIn;