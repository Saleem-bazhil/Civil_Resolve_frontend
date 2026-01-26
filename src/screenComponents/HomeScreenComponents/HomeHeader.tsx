import React from 'react'
import { View, Text, Platform, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
    const navigation = useNavigation<any>();
    return (
        <View
            className={`bg-white px-6 pb-4 border-b border-gray-100 ${Platform.OS === 'android' ? 'pt-12' : 'pt-14'}`}
            style={{
                elevation: 4,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 4
            }}
        >
            <StatusBar hidden={true} />

            <View className="flex-row items-center justify-between">

                <View className="flex-row items-center">
                    <View className="bg-indigo-600 w-10 h-10 rounded-xl items-center justify-center mr-3">
                        <Ionicons name="people" size={22} color="white" />
                    </View>

                    <View className='ml-2'>
                        <Text className="text-lg font-extrabold text-slate-900">
                            CivicResolve
                        </Text>
                        <Text className="text-xs font-bold text-slate-400 uppercase">
                            Official Portal
                        </Text>
                    </View>
                </View>

                <View className="flex-row items-center">

                    <Pressable
                        onPress={() => { navigation.navigate("Alerts") }}
                        className="w-10 h-10 bg-white border border-gray-100 rounded-full items-center justify-center"
                        android_ripple={{ color: '#f1f5f9' }}
                    >
                        <Ionicons name="notifications-outline" size={22} color="#64748b" />
                        <View className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                    </Pressable>

                    <Pressable
                        onPress={() => { navigation.navigate("Profile") }}
                        className="ml-3 w-10 h-10 bg-gray-100 rounded-full items-center justify-center border border-white"
                        android_ripple={{ color: '#f1f5f9' }}
                    >
                        <Ionicons name="person" size={20} color="#94a3b8" />
                    </Pressable>

                </View>
            </View>
        </View>
    )
}

export default HomeHeader