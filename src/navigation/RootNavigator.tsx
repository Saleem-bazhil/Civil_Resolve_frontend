import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreenContent } from 'components/ScreenContent';
import BottomTabs from './BottomTabs';
import { IssueDetailScreen, DescribeFormIssue, AddressFormIssue, ReviewPage, SignupScreen, LoginScreen, EditProfileScreen } from '../imports/Imports';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='login' component={LoginScreen} options={{ headerShown: true }} />
            <Stack.Screen name='signup' component={SignupScreen} options={{ headerShown: true }} />
            <Stack.Screen name="MainTabs" component={BottomTabs} options={{ headerShown: false }} />
            <Stack.Screen name="Screen" component={ScreenContent} options={{ headerShown: true }} />
            <Stack.Screen name='IssueDetail' component={IssueDetailScreen} options={{ headerShown: false }} />
            <Stack.Screen name='DescribeForm' component={DescribeFormIssue} options={{ headerShown: true }} />
            <Stack.Screen name='AddressForm' component={AddressFormIssue} options={{ headerShown: true }} />
            <Stack.Screen name='ReviewPage' component={ReviewPage} options={{ headerShown: true }} />
            <Stack.Screen name='EditProfile' component={EditProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default RootNavigator