import { View, Text, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ReportCard = () => {
    const navigation = useNavigation<any>();

    return (
        <View className="mt-8 rounded-3xl overflow-hidden shadow-xl shadow-blue-900/20">
            <LinearGradient
                colors={["#312e81", "#4f46e5"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="p-7 relative"
            >
                {/* background circle */}
                <View className="absolute -right-6 -top-6 bg-white/5 rounded-full h-32 w-32" />

                <View className="flex-row justify-between items-start mb-8">
                    <View className="flex-1 pr-6">
                        <View className="bg-indigo-400/20 self-start px-3 py-1 rounded-full mb-3 border border-indigo-300/30">
                            <Text className="text-indigo-200 text-[10px] font-bold uppercase tracking-widest">
                                Civic Action
                            </Text>
                        </View>
                        <Text className="text-2xl font-bold text-white leading-tight">
                            Report a Problem
                        </Text>

                        <Text className="text-sm text-slate-300 mt-2 leading-relaxed font-medium">
                            Spot an issue? Help us improve your community by reporting it instantly.
                        </Text>
                    </View>

                    <View className="bg-white/10 p-3 rounded-2xl border border-white/5 shadow-inner">
                        <Ionicons
                            name="megaphone-outline"
                            size={28}
                            color="#93c5fd"
                        />
                    </View>
                </View>

                <Pressable
                    onPress={() => navigation.navigate("Report a Problem")}
                    className="flex-row items-center justify-center bg-white px-6 py-4 rounded-xl shadow-sm active:scale-95 transition-transform"
                >
                    <Text className="text-slate-900 font-bold text-sm mr-2.5">
                        Start Report
                    </Text>
                    <Ionicons name="arrow-forward" size={18} color="#0f172a" />
                </Pressable>
            </LinearGradient>
        </View>
    );
};

export default ReportCard;
