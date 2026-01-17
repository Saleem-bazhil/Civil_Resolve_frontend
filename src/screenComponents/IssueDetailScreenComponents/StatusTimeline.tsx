import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const StatusTimeline = () => {
    return (
        <View className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6 my-5">

            {/* Title */}
            <Text className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-6">
                Status Timeline
            </Text>

            {/* Issue Reported */}
            <View className="flex-row">
                <View className="items-center mr-4">
                    <View className="w-8 h-8 rounded-full bg-orange-400 items-center justify-center">
                        <Ionicons name="time-outline" size={14} color="#fff" />
                    </View>
                    <View className="w-px flex-1 bg-gray-100 mt-2" />
                </View>

                <View className="flex-1 pb-6">
                    <View className="flex-row items-start">
                        <View className="flex-1 pr-3">
                            <Text className="text-[14.5px] font-semibold text-gray-900">
                                Issue Reported
                            </Text>
                        </View>
                        <View className="w-24 items-end">
                            <Text className="text-[11px] text-gray-400 text-right">
                                Jan 8, 2:30 PM
                            </Text>
                        </View>
                    </View>

                    <Text className="text-sm text-gray-400 mt-1 leading-6">
                        Your report has been received
                    </Text>
                </View>
            </View>

            {/* Assigned to Officer */}
            <View className="flex-row">
                <View className="items-center mr-4">
                    <View className="w-8 h-8 rounded-full bg-orange-400 items-center justify-center">
                        <Ionicons name="time-outline" size={14} color="#fff" />
                    </View>
                    <View className="w-px flex-1 bg-gray-100 mt-2" />
                </View>

                <View className="flex-1 pb-6">
                    <View className="flex-row items-start">
                        <View className="flex-1 pr-3">
                            <Text className="text-[14.5px] font-semibold text-gray-900">
                                Assigned to Officer
                            </Text>
                        </View>
                        <View className="w-24 items-end">
                            <Text className="text-[11px] text-gray-400 text-right">
                                Jan 8, 4:15 PM
                            </Text>
                        </View>
                    </View>

                    <Text className="text-sm text-gray-400 mt-1 leading-6">
                        Issue assigned to Roads Department
                    </Text>

                    <View className="flex-row items-center mt-2">
                        <Ionicons name="person-outline" size={12} color="#9CA3AF" />
                        <Text className="text-[11px] text-gray-400 ml-1">
                            System
                        </Text>
                    </View>
                </View>
            </View>

            {/* Work In Progress */}
            <View className="flex-row">
                <View className="items-center mr-4">
                    <View className="w-9 h-9 rounded-full bg-blue-600 border-[3px] border-blue-100 items-center justify-center shadow-sm">
                        <Ionicons name="alert-circle-outline" size={16} color="#fff" />
                    </View>
                    <View className="w-px flex-1 bg-gray-100 mt-2" />
                </View>

                <View className="flex-1 pb-6">
                    <View className="flex-row items-start">
                        <View className="flex-1 pr-3">
                            <Text className="text-[15px] font-semibold text-gray-900">
                                Work In Progress
                            </Text>
                        </View>
                        <View className="w-24 items-end">
                            <Text className="text-[11px] text-gray-400 text-right">
                                Jan 9, 10:00 AM
                            </Text>
                        </View>
                    </View>

                    <Text className="text-sm text-gray-500 mt-1 leading-6">
                        Team has inspected the site. Repair work scheduled.
                    </Text>

                    <View className="flex-row items-center mt-2">
                        <Ionicons name="person-outline" size={12} color="#9CA3AF" />
                        <Text className="text-[11px] text-gray-400 ml-1">
                            Rajesh Kumar
                        </Text>
                    </View>
                </View>
            </View>

            {/* Resolution Pending */}
            <View className="flex-row">
                <View className="items-center mr-4">
                    <View className="w-8 h-8 rounded-full bg-gray-200 items-center justify-center">
                        <Ionicons name="checkmark" size={14} color="#6B7280" />
                    </View>
                </View>

                <View className="flex-1">
                    <View className="flex-row items-start">
                        <View className="flex-1 pr-3">
                            <Text className="text-[14.5px] font-semibold text-gray-500">
                                Resolution Pending
                            </Text>
                        </View>
                        <View className="w-24 items-end">
                            <Text className="text-[11px] text-gray-400 text-right">
                                Jan 13
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    );
};

export default StatusTimeline;
