import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignOut = () => {
  const navigation = useNavigation<any>();

  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem("token");
      navigation.reset({
        index: 0,
        routes: [{ name: "login" }],
      });
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Pressable
      onPress={handleSignOut}
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
