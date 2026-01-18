import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const NotificationCard = () => {
    return (
        <TouchableOpacity activeOpacity={0.9} className="my-4 ">
            <View
                className="bg-white rounded-2xl border border-gray-100 flex-row overflow-hidden"
                style={{
                    shadowColor: "#1E3A8A",
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.08,
                    shadowRadius: 16,
                    elevation: 2,
                }}
            >

                <LinearGradient
                    colors={["#1E3A8A", "#3B5FBF"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    className="w-1.5"
                />

                <View className="flex-1">

                    <View className="flex-row justify-between items-center px-5 pt-5 pb-2">
                        <Text className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                            Roads Dept
                        </Text>
                        <Text className="text-xs text-gray-400 font-medium">
                            2h ago
                        </Text>
                    </View>

                    <View className="px-5 pb-5">
                        <Text className="text-lg font-bold text-slate-900 mb-1">
                            Status Updated
                        </Text>
                        <Text className="text-sm text-slate-500 leading-6 font-medium">
                            Your issue regarding the reported pothole is now being worked on by a field engineer.
                        </Text>
                    </View>

                    <View className="flex-row items-center justify-between px-5 py-3.5 bg-slate-50 border-t border-slate-100">

                        <View className="px-3 py-1 rounded-md bg-blue-50 border border-blue-100">
                            <Text
                                className="text-[10px] font-extrabold uppercase tracking-wide"
                                style={{ color: "#1E3A8A" }}
                            >
                                In Progress
                            </Text>
                        </View>

                        <View className="flex-row items-center">
                            <Text className="text-xs font-bold text-slate-700 mr-1.5">View Details</Text>
                            <Ionicons name="chevron-forward" size={14} color="#334155" />
                        </View>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    );
};

export default NotificationCard;

