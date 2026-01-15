import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import ReportCard from "../screenComponents/HomeScreenComponents/ReportCard"
import IssueCard from "../screenComponents/HomeScreenComponents/IssueCard";

const Home = () => {
  return (
    <ScrollView
      className="bg-background-bgcolor"
      contentContainerStyle={{ padding: 26 }}
    >
      {/* Header */}
      <View className="mb-6">
        <Text className="text-4xl font-bold text-black">
          Hello, Citizen 👋
        </Text>
        <Text className="text-sm text-gray-600 mt-2">
          Report and track civic issues in your area
        </Text>
      </View>

      <ReportCard />
      <IssueCard />
    </ScrollView>
  );
};

export default Home;
