import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IssueStatus } from "../../screens/IssueDetail";

interface StatusTimelineProps {
    status: IssueStatus;
    createdAt: string;
    history: any[];
}

const StatusTimeline: React.FC<StatusTimelineProps> = ({ status, createdAt, history }) => {

    const formatDate = (dateString: string) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" }) +
            ", " +
            date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    };

    // Find specific history events
    const inProgressEvent = history.find(h => h.newStatus === "IN_PROGRESS");
    const resolvedEvent = history.find(h => h.newStatus === "RESOLVED");
    const closedEvent = history.find(h => h.newStatus === "CLOSED");

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
                                {formatDate(createdAt)}
                            </Text>
                        </View>
                    </View>
                    <Text className="text-sm text-gray-400 mt-1 leading-6">
                        Your report has been received and assigned.
                    </Text>
                </View>
            </View>

            {/* Work In Progress */}
            <View className="flex-row">
                <View className="items-center mr-4">
                    <View className={`w-9 h-9 rounded-full border-[3px] items-center justify-center shadow-sm 
                        ${inProgressEvent || status === "IN_PROGRESS" || status === "RESOLVED" || status === "CLOSED"
                            ? "bg-blue-600 border-blue-100"
                            : "bg-gray-200 border-gray-100"}`}>
                        <Ionicons name="construct-outline" size={16} color={inProgressEvent || status === "IN_PROGRESS" || status === "RESOLVED" || status === "CLOSED" ? "#fff" : "#9CA3AF"} />
                    </View>
                    <View className="w-px flex-1 bg-gray-100 mt-2" />
                </View>

                <View className="flex-1 pb-6">
                    <View className="flex-row items-start">
                        <View className="flex-1 pr-3">
                            <Text className={`text-[15px] font-semibold ${inProgressEvent || status === "IN_PROGRESS" || status === "RESOLVED" || status === "CLOSED" ? "text-gray-900" : "text-gray-400"}`}>
                                Work In Progress
                            </Text>
                        </View>
                        {inProgressEvent && (
                            <View className="w-24 items-end">
                                <Text className="text-[11px] text-gray-400 text-right">
                                    {formatDate(inProgressEvent.changedAt)}
                                </Text>
                            </View>
                        )}
                    </View>
                    <Text className="text-sm text-gray-500 mt-1 leading-6">
                        {inProgressEvent ? "Officer is working on the issue." : "Waiting for officer to start."}
                    </Text>
                </View>
            </View>

            {/* Resolved */}
            <View className="flex-row">
                <View className="items-center mr-4">
                    <View className={`w-8 h-8 rounded-full items-center justify-center ${resolvedEvent || status === "RESOLVED" || status === "CLOSED" ? "bg-green-500" : "bg-gray-200"}`}>
                        <Ionicons name="checkmark" size={14} color={resolvedEvent || status === "RESOLVED" || status === "CLOSED" ? "#fff" : "#6B7280"} />
                    </View>
                    {/* Line only if closed follows */}
                    {status === "CLOSED" && <View className="w-px flex-1 bg-gray-100 mt-2" />}
                </View>

                <View className="flex-1 pb-6">
                    <View className="flex-row items-start">
                        <View className="flex-1 pr-3">
                            <Text className={`text-[14.5px] font-semibold ${resolvedEvent || status === "RESOLVED" || status === "CLOSED" ? "text-gray-900" : "text-gray-400"}`}>
                                Resolved
                            </Text>
                        </View>
                        {resolvedEvent && (
                            <View className="w-24 items-end">
                                <Text className="text-[11px] text-gray-400 text-right">
                                    {formatDate(resolvedEvent.changedAt)}
                                </Text>
                            </View>
                        )}
                    </View>
                    <Text className="text-sm text-gray-500 mt-1 leading-6">
                        {resolvedEvent ? "Issue marked as resolved." : "Pending resolution."}
                    </Text>
                </View>
            </View>

            {/* Closed */}
            {status === "CLOSED" && (
                <View className="flex-row">
                    <View className="items-center mr-4">
                        <View className="w-8 h-8 rounded-full bg-gray-500 items-center justify-center">
                            <Ionicons name="lock-closed" size={14} color="#fff" />
                        </View>
                    </View>

                    <View className="flex-1">
                        <View className="flex-row items-start">
                            <View className="flex-1 pr-3">
                                <Text className="text-[14.5px] font-semibold text-gray-900">
                                    Closed
                                </Text>
                            </View>
                            {closedEvent && (
                                <View className="w-24 items-end">
                                    <Text className="text-[11px] text-gray-400 text-right">
                                        {formatDate(closedEvent.changedAt)}
                                    </Text>
                                </View>
                            )}
                        </View>
                    </View>
                </View>
            )}

        </View>
    );
};

export default StatusTimeline;
