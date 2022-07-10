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

/*
const Grilla = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");


    const handleLogin = () => {
        const navigation = useNavigation();
        navigation.navigate('Home');
        console.log(username, password);
      };*/