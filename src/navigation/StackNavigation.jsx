import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from '../pages/Main'
import LogIn from '../pages/LogIn'

const Stack = createNativeStackNavigator()

export default function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            {/*<Stack.Screen name='Main' component={Main}/> */}
            <Stack.Screen name='LogIn' component={LogIn}/>
        </Stack.Navigator>
    )
}