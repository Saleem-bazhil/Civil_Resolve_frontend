import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import ReportCard from "../screenComponents/HomeScreenComponents/ReportCard"
import IssueCard from "../screenComponents/HomeScreenComponents/IssueCard";
import MyIssueCard from "../screenComponents/IssueScreenComponents/MyIssueCard";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HomeHeader from "../screenComponents/HomeScreenComponents/HomeHeader";

const Home = () => {
  const navigation = useNavigation<any>();
  return (
    <>

      <HomeHeader />
      <ScrollView
        className="bg-gray-50 flex-1"
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 30, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="mb-1">
          <Text className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Hello, Citizen 👋
          </Text>
          <Text className="text-base text-gray-500 font-medium mt-1 leading-relaxed">
            Report and track civic issues in your area
          </Text>
        </View>

        <ReportCard />
        <IssueCard />

        {/* Recent Issue  */}
        <View className="mt-10 mb-5 flex-row items-center justify-between">
          {/* Section Title */}
          <View>
            <Text className="text-xl font-bold text-gray-900">
              Recent Issues
            </Text>
            <Text className="text-xs text-gray-400 font-medium mt-0.5">
              Your submissions
            </Text>
          </View>

          {/* Action */}
          <Pressable
            onPress={() => navigation.navigate("MainTabs", { screen: "Issues" })}
            android_ripple={{ color: "#bfdbfe" }}
            className="flex-row items-center bg-blue-50 px-3 py-1.5 rounded-full active:bg-blue-100"
          >
            <Text className="text-blue-600 text-xs font-bold mr-1 uppercase tracking-wide">
              View All
            </Text>
            <Ionicons
              name="arrow-forward"
              size={14}
              color="#2563EB"
            />
          </Pressable>
        </View>

        {/* Cards */}
        <MyIssueCard limit={3} />

      </ScrollView>
    </>
  );
};

export default Home;
