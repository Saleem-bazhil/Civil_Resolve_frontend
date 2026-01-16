import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IssueCard = () => {
    return (
        <View className="flex-row flex-wrap gap-4 mt-6">
            {/* Total Issues */}
            <View className="w-[48%] bg-white rounded-2xl p-5 shadow-md">
                <View className="flex-row justify-between items-center">
                    <Text className="text-gray-500 text-sm font-medium">
                        Total Issues
                    </Text>
                    <View className="bg-gray-200/70 rounded-full p-2">
                        <Ionicons
                            name="document-text-outline"
                            size={18}
                            color="#111827"
                        />
                    </View>
                </View>
                <Text className="text-3xl font-bold mt-4 text-gray-900">
                    12
                </Text>
            </View>

            {/* Pending */}
            <View className="w-[48%] bg-orange-400 rounded-2xl p-5">
                <View className="flex-row justify-between items-center">
                    <Text className="text-white/90 text-sm font-semibold">
                        Pending
                    </Text>
                    <View className="bg-white/25 rounded-full p-2">
                        <Ionicons
                            name="time-outline"
                            size={18}
                            color="white"
                        />
                    </View>
                </View>
                <Text className="text-3xl font-bold text-white mt-4">
                    3
                </Text>
            </View>

            {/* In Progress */}
            <View className="w-[48%] bg-white rounded-2xl p-5 shadow-md">
                <View className="flex-row justify-between items-center">
                    <Text className="text-gray-500 text-sm font-medium">
                        In Progress
                    </Text>
                    <View className="bg-gray-200/70 rounded-full p-2">
                        <Ionicons
                            name="alert-circle-outline"
                            size={18}
                            color="#111827"
                        />
                    </View>
                </View>
                <Text className="text-3xl font-bold mt-4 text-gray-900">
                    5
                </Text>
            </View>

            {/* Resolved */}
            <View className="w-[48%] bg-green-500 rounded-2xl p-5">
                <View className="flex-row justify-between items-center">
                    <Text className="text-white/90 text-sm font-semibold">
                        Resolved
                    </Text>
                    <View className="bg-white/25 rounded-full p-2">
                        <Ionicons
                            name="checkmark-circle-outline"
                            size={18}
                            color="white"
                        />
                    </View>
                </View>
                <Text className="text-3xl font-bold text-white mt-4">
                    4
                </Text>
            </View>
        </View>
    );
};

export default IssueCard;
