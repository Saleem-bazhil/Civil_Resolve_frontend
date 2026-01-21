import { View, Text, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ReportCard = () => {
    const navigation = useNavigation<any>();

    return (
        <View className="mt-8 rounded-2xl overflow-hidden shadow-lg">
            <LinearGradient
                colors={["#1E3A8A", "#3B5FBF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="p-6"
            >

                <View className="flex-row justify-between items-start mb-6">
                    <View className="flex-1 pr-4">
                        <Text className="text-xl font-semibold text-white">
                            Report a Problem
                        </Text>

                        <Text className="text-sm text-white/90 mt-2 leading-5">
                            Help improve your community by reporting civic issues quickly
                        </Text>
                    </View>

                    <View className="bg-white/25 rounded-2xl h-14 w-14 items-center justify-center">
                        <Ionicons
                            name="document-text-outline"
                            size={26}
                            color="white"
                        />
                    </View>
                </View>

                <Pressable
                    onPress={() => navigation.navigate("Report a Problem")}
                    className="flex-row items-center gap-2 self-start bg-white/25 px-5 py-3 rounded-full active:opacity-80"
                >
                    <AntDesign name="plus" size={18} color="white" />
                    <Text className="text-white font-semibold text-sm">
                        Report Now
                    </Text>
                </Pressable>
            </LinearGradient>
        </View>
    );
};

export default ReportCard;
