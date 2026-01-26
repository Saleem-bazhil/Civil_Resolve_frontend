import { View, Text ,ScrollView , Pressable} from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
  import OfficerReportCard from '../../screenComponents/officerComponents/OfficerAssignedIssue';
import OfficerIssueCard from '../../screenComponents/officerComponents/OfficerIssueCard';
const OfficerHome = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
        className="bg-background-bgcolor"
        contentContainerStyle={{ padding: 26, paddingBottom: 90, }}
  
      >
        {/* Header */}
        <View className="my-4">
          <Text className="text-4xl font-bold text-black">
            Hello, Officer 👋
          </Text>
          <Text className="text-sm text-gray-600 mt-2">
            Report and track civic issues in your area
          </Text>
        </View>
  
        <OfficerReportCard />
   
  
        {/* Recent Issue  */}
  
        <View className="mt-10 mb-5 flex-row items-center justify-between">
          {/* Section Title */}
          <Text className="text-[18px] font-semibold text-gray-900 tracking-tight">
            Requires Attention
          </Text>
  
          {/* Action */}
          <Pressable
            // onPress={() => navigation.navigate("MainTabs", { screen: "Issues" })}
            android_ripple={{ color: "#E5E7EB" }}
            className="flex-row items-center px-2 py-1 rounded-md"
          >
            <Text className="text-blue-600 text-sm font-medium mr-1">
              View All
            </Text>
            <Ionicons
              name="chevron-forward"
              size={14}
              color="#2563EB"
            />
          </Pressable>
        </View>
  
        {/* Cards */}
        {/* <MyIssueCard /> */}
        <OfficerIssueCard/>
  
  
  
      </ScrollView>
  )
}

export default OfficerHome