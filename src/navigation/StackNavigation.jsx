import React from 'react'
import Main from '../pages/Main'
import LogIn from '../pages/LogIn'
import Exams from '../pages/Exams'
import Schedule from '../pages/Schedule'
import Grilla from '../pages/Grilla'
import CreateComplain from '../pages/CreateComplain'
import Complains from '../pages/Complains'
import { Button, Text, TextInput, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export const AuthContext = React.createContext()

export default function StackNavigation({ navigation }) {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    }
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    }
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    }
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    )

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken

            try {
                // Restore token stored in `SecureStore` or any other encrypted storage
                // userToken = await SecureStore.getItemAsync('userToken');
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({ type: 'RESTORE_TOKEN', token: userToken })
        }

        bootstrapAsync()
    }, [])

    const authContext = React.useMemo(
        () => ({
            signIn: async (data) => {
                // In a production app, we need to send some data (usually username, password) to server and get a token
                // We will also need to handle errors if sign in failed
                // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
                // In the example, we'll use a dummy token

                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })
            },
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
            signUp: async (data) => {
                // In a production app, we need to send user data to server and get a token
                // We will also need to handle errors if sign up failed
                // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
                // In the example, we'll use a dummy token

                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })
            },
        }),
        []
    )

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    {state.userToken ? (
                        <>
                            <Stack.Screen name="Main" component={Main} />
                            <Stack.Screen name="Exams" component={Exams} />
                            <Stack.Screen name="Complains" component={Complains}/>
                            <Stack.Screen name="CreateComplain" component={CreateComplain}/>
                            <Stack.Screen name="Schedule" component={Schedule}/>
                            <Stack.Screen name="Grilla" component={Grilla}/>
                        </>
                    ) : (
                        <>  
                            <Stack.Screen name="LogIn" component={LogIn} />
                        </>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
}
