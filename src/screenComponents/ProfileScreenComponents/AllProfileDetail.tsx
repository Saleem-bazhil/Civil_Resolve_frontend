import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AllProfileDetail = () => {
    return (
        <View className="flex-1 pt-6 ">
            <View
                className="bg-white rounded-[28px] overflow-hidden shadow-xl shadow-blue-900/5"
                style={{ elevation: 4 }}
            >

                {/* Notification */}
                <Pressable className="flex-row items-center p-5 border-b border-slate-100 active:bg-slate-50">

                    <View className="w-12 h-12 rounded-full bg-blue-50 items-center justify-center mr-4">
                        <Ionicons name="notifications-outline" size={22} color="#1E3A8A" />
                    </View>

                    <View className="flex-1">
                        <Text className="text-base font-bold text-slate-800 mb-0.5">
                            Notifications
                        </Text>
                        <Text className="text-xs font-medium text-slate-400">
                            Manage your alerts
                        </Text>
                    </View>

                    <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
                </Pressable>

                {/* Privacy &  Policy */}
                <Pressable className="flex-row items-center p-5 border-b border-slate-100 active:bg-slate-50">
                    <View className="w-12 h-12 rounded-full bg-blue-50 items-center justify-center mr-4">
                        <Ionicons name="lock-closed-outline" size={22} color="#1E3A8A" />
                    </View>

                    <View className="flex-1">
                        <Text className="text-base font-bold text-slate-800 mb-0.5">
                            Privacy & Security
                        </Text>
                        <Text className="text-xs font-medium text-slate-400">
                            Account protection
                        </Text>
                    </View>

                    <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
                </Pressable>

                {/* Help and Support */}
                <Pressable className="flex-row items-center p-5 active:bg-slate-50">
                    <View className="w-12 h-12 rounded-full bg-blue-50 items-center justify-center mr-4">
                        <Ionicons name="help-circle-outline" size={22} color="#1E3A8A" />
                    </View>

                    <View className="flex-1">
                        <Text className="text-base font-bold text-slate-800 mb-0.5">
                            Help & Support
                        </Text>
                        <Text className="text-xs font-medium text-slate-400">
                            FAQs and contact
                        </Text>
                    </View>

                    <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
                </Pressable>

            </View>
        </View>
    );
};

export default AllProfileDetail;