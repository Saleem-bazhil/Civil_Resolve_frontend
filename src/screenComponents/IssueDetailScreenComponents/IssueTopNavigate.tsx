import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const IssueTopNavigate = () => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{ paddingTop: insets.top + 10 }}
            className="bg-white px-5 pb-4 border-b border-gray-100"
        >
            {/* back arrow , issue id*/}
            <View className="flex-row items-center">
                <Pressable
                    onPress={() => navigation.goBack()}
                    hitSlop={10}
                    className="mr-3 rounded-full p-2 active:bg-gray-100"
                >
                    <Ionicons name="arrow-back" size={22} color="#111827" />
                </Pressable>

                <Text className="text-[15px] font-semibold text-gray-900 tracking-wide">
                    #CIV-2024-0847
                </Text>
            </View>

            {/* Status Pill */}
            <View className="mt-2 pl-10">
                <View className="flex-row items-center bg-blue-50 px-3 py-1.5 rounded-full self-start border border-blue-200">
                    <View className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                    <Text className="text-xs font-semibold text-blue-700 tracking-wide">
                        IN PROGRESS
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default IssueTopNavigate;
