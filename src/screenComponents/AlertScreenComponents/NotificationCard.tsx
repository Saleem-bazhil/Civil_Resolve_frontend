import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

interface NotificationCardProps {
    notification: any;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ notification }) => {

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <TouchableOpacity activeOpacity={0.9} className="my-2">
            <View
                className={`bg-white rounded-2xl border ${notification.read ? "border-gray-100" : "border-blue-100 bg-blue-50/30"} flex-row overflow-hidden`}

            >

                <LinearGradient
                    colors={notification.read ? ["#94A3B8", "#CBD5E1"] : ["#3730a3", "#4f46e5"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    className="w-1.5"
                />

                <View className="flex-1">

                    <View className="flex-row justify-between items-center px-5 pt-4 pb-1">
                        <Text className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                            {notification.type.replace("_", " ")}
                        </Text>
                        <Text className="text-xs text-gray-400 font-medium">
                            {formatDate(notification.createdAt)}
                        </Text>
                    </View>

                    <View className="px-5 pb-4">
                        <Text className="text-base font-semibold text-slate-900 mb-1">
                            {notification.message}
                        </Text>
                        {notification.issue && (
                            <Text className="text-xs text-slate-500 font-medium">
                                Issue: {notification.issue.title}
                            </Text>
                        )}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default NotificationCard;

