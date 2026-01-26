import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScreenContent } from 'components/ScreenContent';
import BottomTabs from './BottomTabs';
import { IssueDetailScreen, DescribeFormIssue, AddressFormIssue, ReviewPage, SignupScreen, LoginScreen, EditProfileScreen, OfficerHome } from '../imports/Imports';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    const [role, setRole] = useState<"ADMIN" | "OFFICER" | "CITIZEN" | null>(null);
    const [isCheckingRole, setIsCheckingRole] = useState(true);

    useEffect(() => {
        const fetchRole = async () => {
            try {
                const storedRole = await AsyncStorage.getItem("role");
                if (storedRole) {
                    setRole(storedRole as any);
                } else {
                    setRole(null);
                }
            } catch (error) {
                console.error("Error fetching role:", error);
                setRole(null);
            } finally {
                setIsCheckingRole(false);
            }
        };
        fetchRole();

        // Listen for role changes (especially when signing out)
        const interval = setInterval(fetchRole, 500);
        return () => clearInterval(interval);
    }, [])

    return (
        <Stack.Navigator>
            {!role ? (
                <>
                    <Stack.Screen name='login' component={LoginScreen} options={{ headerShown: true }} />
                    <Stack.Screen name='signup' component={SignupScreen} options={{ headerShown: true }} />
                </>
            )
                : (
                    <>
                        <Stack.Screen name="MainTabs" options={{ headerShown: false }}>
                            {() => <BottomTabs role={role} />}
                        </Stack.Screen>
                        <Stack.Screen name="Screen" component={ScreenContent} options={{ headerShown: true }} />
                        <Stack.Screen name='IssueDetail' component={IssueDetailScreen} options={{ headerShown: false }} />
                        <Stack.Screen name='DescribeForm' component={DescribeFormIssue} options={{ headerShown: true }} />
                        <Stack.Screen name='AddressForm' component={AddressFormIssue} options={{ headerShown: true }} />
                        <Stack.Screen name='ReviewPage' component={ReviewPage} options={{ headerShown: true }} />
                        <Stack.Screen name='EditProfile' component={EditProfileScreen} options={{ headerShown: false }} />
                        <Stack.Screen name='OfficerHome' component={OfficerHome} options={{ headerShown: false }} />
                    </>
                )}

        </Stack.Navigator>
    )
}

export default RootNavigator