import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import api from "../../api/Axios";

const OfficerAssignedIssue = () => {
    const [stats, setStats] = useState({
        total: 0,
        open: 0,
        inProgress: 0,
        resolved: 0
    });

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const response = await api.get("/issues");
            const issues = response.data;
            const newStats = issues.reduce(
                (acc: any, issue: any) => {
                    acc.total++;
                    if (issue.status === "OPEN") acc.open++;
                    else if (issue.status === "IN_PROGRESS") acc.inProgress++;
                    else if (issue.status === "RESOLVED") acc.resolved++;
                    return acc;
                },
                { total: 0, open: 0, inProgress: 0, resolved: 0 }
            );
            setStats(newStats);
        } catch (error) {
            console.error("Error fetching stats:", error);
        }
    };

    return (
        <View className="flex-row flex-wrap justify-between gap-y-4">
            {/* Total Issues */}
            <View className="w-[48%] shadow-sm rounded-2xl">
                <LinearGradient
                    colors={["#ffffff", "#f8fafc"]}
                    className="p-5 border border-gray-100"
                    style={{ borderRadius: 16 }}
                >
                    <View className="flex-row justify-between items-start mb-4">
                        <View className="bg-gray-100 p-2.5 rounded-2xl">
                            <Ionicons
                                name="layers-outline"
                                size={22}
                                color="#1e293b"
                            />
                        </View>
                        <Text className="text-4xl font-bold text-gray-900">
                            {stats.total}
                        </Text>
                    </View>
                    <Text className="text-gray-500 font-medium text-sm">
                        Total Issues
                    </Text>
                    <Text className="text-gray-400 text-xs mt-1">
                        All assignments
                    </Text>
                </LinearGradient>
            </View>

            {/* Pending (Open) */}
            <View className="w-[48%] shadow-lg shadow-orange-200/50 rounded-2xl">
                <LinearGradient
                    colors={["#fb923c", "#ea580c"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="p-5"
                    style={{ borderRadius: 16 }}
                >
                    <View className="flex-row justify-between items-start mb-4">
                        <View className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-md">
                            <Ionicons
                                name="time-outline"
                                size={22}
                                color="#ffffff"
                            />
                        </View>
                        <Text className="text-4xl font-bold text-white">
                            {stats.open}
                        </Text>
                    </View>
                    <Text className="text-white/90 font-medium text-sm">
                        Pending
                    </Text>
                    <Text className="text-white/60 text-xs mt-1">
                        Needs attention
                    </Text>
                </LinearGradient>
            </View>

            {/* In Progress */}
            <View className="w-[48%] shadow-lg shadow-blue-200/50 rounded-2xl">
                <LinearGradient
                    colors={["#3b82f6", "#2563eb"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="p-5"
                    style={{ borderRadius: 16 }}
                >
                    <View className="flex-row justify-between items-start mb-4">
                        <View className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-md">
                            <Ionicons
                                name="construct-outline"
                                size={22}
                                color="#ffffff"
                            />
                        </View>
                        <Text className="text-4xl font-bold text-white">
                            {stats.inProgress}
                        </Text>
                    </View>
                    <Text className="text-white/90 font-medium text-sm">
                        In Progress
                    </Text>
                    <Text className="text-white/60 text-xs mt-1">
                        Currently working
                    </Text>
                </LinearGradient>
            </View>

            {/* Resolved */}
            <View className="w-[48%] shadow-lg shadow-green-200/50 rounded-2xl">
                <LinearGradient
                    colors={["#22c55e", "#16a34a"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="p-5"
                    style={{ borderRadius: 16 }}
                >
                    <View className="flex-row justify-between items-start mb-4">
                        <View className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-md">
                            <Ionicons
                                name="checkmark-circle-outline"
                                size={22}
                                color="#ffffff"
                            />
                        </View>
                        <Text className="text-4xl font-bold text-white">
                            {stats.resolved}
                        </Text>
                    </View>
                    <Text className="text-white/90 font-medium text-sm">
                        Resolved
                    </Text>
                    <Text className="text-white/60 text-xs mt-1">
                        Completed tasks
                    </Text>
                </LinearGradient>
            </View>
        </View>
    );
};

export default OfficerAssignedIssue;
