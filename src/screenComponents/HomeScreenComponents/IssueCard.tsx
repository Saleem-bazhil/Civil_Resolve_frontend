import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IssueCard = () => {
    return (
        <View className="flex-row flex-wrap gap-4 mt-4">
            {/* Total Issues */}
            <View className="w-[48%] h-[60%] bg-white rounded-2xl p-4 shadow-sm">
                <View className="flex-row justify-between items-center">
                    <Text className="text-gray-500 font-medium">Total Issues</Text>
                    <View className="bg-gray-200 rounded-full p-2">
                        <Ionicons name="document-text-outline" size={18} color="#111827" />
                    </View>
                </View>
                <Text className="text-2xl font-bold mt-3">12</Text>
            </View>

            {/* Pending */}
            <View className="w-[48%] h-[60%] bg-orange-400 rounded-2xl p-4">
                <View className="flex-row justify-between items-center">
                    <Text className="text-white font-medium">Pending</Text>
                    <View className="bg-white/30 rounded-full p-2">
                        <Ionicons name="time-outline" size={18} color="white" />
                    </View>
                </View>
                <Text className="text-2xl font-bold text-white mt-3">3</Text>
            </View>

            {/* In Progress */}
            <View className="w-[48%] h-[60%] bg-white rounded-2xl p-4 shadow-sm">
                <View className="flex-row justify-between items-center">
                    <Text className="text-gray-500 font-medium">In Progress</Text>
                    <View className="bg-gray-200 rounded-full p-2">
                        <Ionicons name="alert-circle-outline" size={18} color="#111827" />
                    </View>
                </View>
                <Text className="text-2xl font-bold mt-3">5</Text>
            </View>

            {/* Resolved */}
            <View className="w-[48%] h-[60%] bg-green-500 rounded-2xl p-4">
                <View className="flex-row justify-between items-center">
                    <Text className="text-white font-medium">Resolved</Text>
                    <View className="bg-white/30 rounded-full p-2">
                        <Ionicons name="checkmark-circle-outline" size={18} color="white" />
                    </View>
                </View>
                <Text className="text-2xl font-bold text-white mt-3">4</Text>
            </View>
        </View>
    );
};

export default IssueCard;
