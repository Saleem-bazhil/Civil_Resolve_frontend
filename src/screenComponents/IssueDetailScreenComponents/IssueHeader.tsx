import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const IssueHeader = () => {
  return (
    <View className="mt-6">
      <View className="bg-white rounded-2xl border border-gray-100 shadow-md shadow-gray-200/40 overflow-hidden">

        {/* Header */}
        <View className="p-5">
          <View className="flex-row items-center mb-3">
            <View className="bg-blue-50 px-3 py-1 rounded-full">
              <Text className="text-[10px] font-semibold text-blue-700 uppercase tracking-wide">
                Road & Footpath
              </Text>
            </View>
          </View>

          <Text className="text-[20px] font-bold text-gray-900 leading-snug mb-2">
            Large pothole on Main Street causing traffic issues
          </Text>

          <Text className="text-[11px] text-gray-400 font-medium">
            Reported on Jan 8, 2024 · 10:30 AM
          </Text>
        </View>

        {/* Divider */}
        <View className="h-px bg-gray-100" />

        {/* Location */}
        <Pressable
          className="bg-gray-50 px-5 py-4 flex-row items-center justify-between active:opacity-90"
        >
          <View className="flex-row items-center flex-1 pr-4">
            <View className="bg-white p-2 rounded-full border border-gray-200 mr-3">
              <Ionicons name="location-outline" size={16} color="#4F46E5" />
            </View>

            <View>
              <Text className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide mb-0.5">
                Location
              </Text>
              <Text
                className="text-sm font-semibold text-gray-700"
                numberOfLines={1}
              >
                Main St, Sector 15
              </Text>
            </View>
          </View>

          <MaterialIcons
            name="chevron-right"
            size={20}
            color="#9CA3AF"
          />
        </Pressable>

      </View>
    </View>
  );
};

export default IssueHeader;
