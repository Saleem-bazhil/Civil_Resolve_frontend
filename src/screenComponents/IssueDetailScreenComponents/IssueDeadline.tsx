import React from "react";
import { View, Text } from "react-native";

const IssueDeadline = () => {
  return (
    <View className="bg-white rounded-2xl border border-gray-200 my-5 flex-row overflow-hidden">
      
      {/* Accent Bar */}
      <View className="w-1.5 bg-blue-500" />

      {/* Content */}
      <View className="flex-1 px-6 py-5 flex-row items-center justify-between">
        
        {/* Resolution Deadline */}
        <View>
          <Text className="text-[11px] uppercase tracking-wider text-gray-400">
            Resolution Deadline
          </Text>
          <Text className="mt-1.5 text-lg font-semibold text-gray-900">
            Jan 17, 2024
          </Text>
        </View>

        {/* Divider */}
        <View className="h-10 w-px bg-gray-200 mx-4" />

        {/* Time Remaining */}
        <View className="items-end">
          <Text className="text-[11px] uppercase tracking-wider text-gray-400">
            Time Remaining
          </Text>
          <Text className="mt-1.5 text-lg font-semibold text-blue-600">
            3 days left
          </Text>
        </View>

      </View>
    </View>
  );
};

export default IssueDeadline;
