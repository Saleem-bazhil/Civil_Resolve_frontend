import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreenContent } from 'components/ScreenContent';
import BottomTabs from './BottomTabs';
import { HomeScreen, IssuesScreen, AlertScreen, ProfileScreen } from '../imports/Imports';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainTabs" component={BottomTabs} options={{ headerShown: false }} />
            <Stack.Screen name="Screen" component={ScreenContent} options={{ headerShown: true }} />
            
        </Stack.Navigator>
    )
}

export default RootNavigator