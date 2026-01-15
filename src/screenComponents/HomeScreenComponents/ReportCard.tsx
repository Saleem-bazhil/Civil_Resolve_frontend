import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";

const ReportCard = ({ navigation }: any) => {
    return (
        <View className="mt-6 rounded-2xl overflow-hidden">
            <LinearGradient
                colors={["#1E3A8A", "#3B5FBF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="p-6"
            >
                {/* Top Row */}
                <View className="flex-row justify-between items-start mb-4">
                    {/* Text */}
                    <View className="flex-1 pr-4">
                        <Text className="text-lg font-semibold mb-1 text-white">
                            Report a Problem
                        </Text>

                        <Text className="text-sm opacity-90 mb-4 text-white ">
                            Help improve your community by reporting issues
                        </Text>
                    </View>

                    {/* Icon */}
                    <View className="bg-white/20 rounded-xl h-14 w-14 items-center justify-center">
                        <Ionicons
                            name="document-text-outline"
                            size={26}
                            color="white"
                        />
                    </View>
                </View>

                {/* Button */}
                <Pressable
                    onPress={() => navigation.navigate("Report")}
                    className="flex-row items-center gap-2 self-start bg-white/20 px-4 py-2 rounded-full active:opacity-80"
                >
                    <AntDesign name="plus" size={18} color="white" />
                    <Text className="text-white font-semibold">
                        Report Now
                    </Text>
                </Pressable>
            </LinearGradient>
        </View>
    )
}

export default ReportCard