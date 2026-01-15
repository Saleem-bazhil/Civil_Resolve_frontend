import React from "react";
import { Text, View } from "react-native";

export const ScreenContent = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">Screen Title</Text>

      <View className="h-px my-7 w-4/5 bg-gray-200" />

      <Text className="mt-4 text-gray-500">Civil Resolve</Text>
    </View>
  );
};
