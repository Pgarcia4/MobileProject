import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from '../pages/Main'
import LogIn from '../pages/LogIn'
import Exams from '../pages/Exams'
import Schedule from '../pages/Schedule'
import Grilla from '../pages/Grilla'
import CreateComplain from '../pages/CreateComplain'
import Complains from '../pages/Complains'

const Stack = createNativeStackNavigator()

export const LoginContext = createContext()
if (state.isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
}

export default function StackNavigation() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        loggedUser().then((res) => setUser(res))
    }, [])

    return (
        <LoginContext.Provider value={{ user, setUser }}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {user ? (
                    <>
                        <Stack.Screen name="Grilla" component={Grilla} />
                        <Stack.Screen name="Schedule" component={Schedule}/>
                        <Stack.Screen name="Main" component={Main} />
                        <Stack.Screen name="Exams" component={Exams} />
                        <Stack.Screen name="Complains" component={Complains} />
                        <Stack.Screen
                            name="CreateComplain"
                            component={CreateComplain}
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="LogIn" component={LogIn} />
                    </>
                )}
            </Stack.Navigator>
        </LoginContext.Provider>
    )
}
