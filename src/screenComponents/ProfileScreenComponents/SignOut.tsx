import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SignOut = () => {
  return (
    <Pressable
      hitSlop={14}
      className="mt-6 rounded-2xl border border-red-200 bg-red-50 py-4 active:bg-red-100"
    >
      {/* Centered content */}
      <View className="flex-row items-center justify-center mr-6">
        <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-red-100">
          <Ionicons name="log-out-outline" size={20} color="#DC2626" />
        </View>

        <Text className="text-base font-semibold text-red-600">
          Sign Out
        </Text>
      </View>
    </Pressable>
  );
};

export default SignOut;
