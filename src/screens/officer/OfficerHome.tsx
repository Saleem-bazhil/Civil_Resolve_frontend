import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import OfficerReportCard from '../../screenComponents/officerComponents/OfficerAssignedIssue';
import OfficerIssueCard from '../../screenComponents/officerComponents/OfficerIssueCard';
import api from '../../api/Axios';

const OfficerHome = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [profile, setProfile] = useState<any>({});
  useEffect(() => {
    api.get("users/profile")
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <ScrollView
      className="bg-gray-50 flex-1"
      contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View className="my-8 mt-12">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Hello, {profile.firstname || 'Officer'} 👋
          </Text>

        </View>
        <Text className="text-base text-gray-500 font-medium leading-relaxed">
          Here's your daily summary and assigned tasks.
        </Text>
      </View>

      <OfficerReportCard />

      {/* Recent Issues Section */}
      <View className="mt-8 mb-6 flex-row items-center justify-between">
        <View>
          <Text className="text-xl font-bold text-gray-900">
            Requires Attention
          </Text>
          <Text className="text-xs text-gray-400 font-medium mt-0.5">
            Latest assignments
          </Text>
        </View>

        <Pressable
          onPress={() => navigation.navigate("MainTabs", { screen: "Issues" })}
          android_ripple={{ color: "#E5E7EB" }}
          className="flex-row items-center bg-blue-50 px-3 py-1.5 rounded-full active:bg-blue-100"
        >
          <Text className="text-blue-600 text-xs font-bold mr-1 uppercase tracking-wide">
            View All
          </Text>
          <Ionicons
            name="arrow-forward"
            size={12}
            color="#2563EB"
          />
        </Pressable>
      </View>

      <OfficerIssueCard />

    </ScrollView>
  )
}

export default OfficerHome