import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from '../pages/Main'
import LogIn from '../pages/LogIn'
import Exams from '../pages/Exams'
import Schedule from '../pages/Schedule'
import Grilla from '../pages/Grilla'

const Stack = createNativeStackNavigator()

export default function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            {/* <Stack.Screen name='Grilla' component={Grilla}/> */}
            <Stack.Screen name='Main' component={Main}/>
            <Stack.Screen name='Exams' component={Exams}/>
            <Stack.Screen name='LogIn' component={LogIn}/>
            <Stack.Screen name='Schedule' component={Schedule}/>
        </Stack.Navigator>
    )
}