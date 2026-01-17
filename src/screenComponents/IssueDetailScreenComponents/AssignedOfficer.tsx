import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AssignedOfficer = () => {
    return (
        <View className="bg-white rounded-2xl border border-gray-200 px-6 py-5">
            <Text className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Assigned Officer
            </Text>

            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center flex-1">

                    {/* Avatar */}
                    <View className="w-12 h-12 rounded-full bg-blue-100 items-center justify-center mr-4">
                        <Ionicons name="person-outline" size={22} color="#1D4ED8" />
                    </View>

                    {/* Officer Info */}
                    <View className="flex-shrink">
                        <Text className="text-[16px] mb-1 font-semibold text-gray-900">
                            Rajesh Kumar
                        </Text>

                        <Text className="text-sm text-gray-500 mt-0.5">
                            Junior Engineer · Roads Department
                        </Text>
                    </View>
                </View>

                {/* Call*/}
                <Pressable
                    hitSlop={12}
                    className="w-11 h-11 rounded-full border border-gray-200 items-center justify-center active:bg-gray-100"
                >
                    <Ionicons name="call-outline" size={20} color="#2563EB" />
                </Pressable>

            </View>
        </View>
    );
};

export default AssignedOfficer;
