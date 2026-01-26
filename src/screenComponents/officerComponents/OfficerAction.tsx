import { View, Text, Pressable, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../api/Axios";
import { Issue, IssueStatus } from "../../screens/IssueDetail";

interface OfficerActionProps {
    issue: Issue;
    onUpdate: () => void;
}

const OfficerAction: React.FC<OfficerActionProps> = ({ issue, onUpdate }) => {
    const [role, setRole] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem("role").then(setRole);
    }, []);

    if (role !== "OFFICER") return null;

    const updateStatus = async (newStatus: IssueStatus) => {
        setLoading(true);
        try {
            await api.patch(`/issues/${issue.id}/status`, { status: newStatus });
            Alert.alert("Success", `Status updated to ${newStatus}`);
            onUpdate();
        } catch (error: any) {
            // console.log(error);
            Alert.alert("Failed to update status");
        } finally {
            setLoading(false);
        }
    };

    const currentStatus = issue.status;

    return (
        <View className="mt-6 mb-10 bg-white p-5 rounded-2xl shadow-sm">
            <Text className="text-gray-900 font-bold mb-4 text-lg">Officer Actions</Text>

            <View className="flex-row gap-3 justify-between">
                {currentStatus === "OPEN" && (
                    <Pressable
                        onPress={() => updateStatus("IN_PROGRESS")}
                        disabled={loading}
                        className="flex-1 bg-blue-600 py-3 rounded-xl items-center"
                    >
                        <Text className="text-white font-bold">Mark In Progress</Text>
                    </Pressable>
                )}

                {(currentStatus === "OPEN" || currentStatus === "IN_PROGRESS") && (
                    <Pressable
                        onPress={() => updateStatus("RESOLVED")}
                        disabled={loading}
                        className="flex-1 bg-green-600 py-3 rounded-xl items-center"
                    >
                        <Text className="text-white font-bold">Mark Resolved</Text>
                    </Pressable>
                )}

                {currentStatus === "RESOLVED" && (
                    <Pressable
                        onPress={() => updateStatus("CLOSED")}
                        disabled={loading}
                        className="flex-1 bg-gray-600 py-3 rounded-xl items-center"
                    >
                        <Text className="text-white font-bold">Mark Closed</Text>
                    </Pressable>
                )}
                {currentStatus === "CLOSED" && (
                    <Text className="text-gray-500 italic">This issue is closed and cannot be updated.</Text>
                )}
            </View>
        </View>
    );
};

export default OfficerAction;
