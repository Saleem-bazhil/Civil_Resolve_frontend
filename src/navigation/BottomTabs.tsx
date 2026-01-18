import React from "react";
import { View, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

import {
  HomeScreen,
  IssuesScreen,
  AlertScreen,
  ProfileScreen,
  ReportIssueScreen,
} from "../imports/Imports";

import { ScreenContent } from "@/components/ScreenContent";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const PRIMARY_COLOR = "hsl(221, 83%, 28%)";

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: true,

        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#f8fafc",
          height: Platform.OS === "ios" ? 88 : 72,
          paddingBottom: Platform.OS === "ios" ? 24 : 10,
          paddingTop: 8,
          borderTopWidth: 0,

          // Premium elevation
          elevation: 16,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.12,
          shadowRadius: 8,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "500",
          marginTop: -4,
        },

        tabBarActiveTintColor: PRIMARY_COLOR,
        tabBarInactiveTintColor: "#9ca3af",
      }}
    >
      {/* Home */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* Issues */}
      <Tab.Screen
        name="Issues"
        component={IssuesScreen}
        options={{
          tabBarLabel: "My Issues",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "document-text" : "document-text-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* plus tab  */}
      <Tab.Screen
        name="Report a Problem"
        component={ReportIssueScreen}
        options={{
          // headerShown:false,
          tabBarLabel: "",
          tabBarIcon: () => (
            <View className="absolute -top-6 items-center justify-center">
              <View
                className="w-16 h-16 rounded-full items-center justify-center border-[4px] border-white"
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  shadowColor: PRIMARY_COLOR,
                  shadowOffset: { width: 0, height: 6 },
                  shadowOpacity: 0.35,
                  shadowRadius: 10,
                  elevation: 20,
                }}
              >
                <AntDesign name="plus" size={28} color="white" />
              </View>
            </View>
          ),
        }}
      />

      {/* Alerts */}
      <Tab.Screen
        name="Alerts"
        component={AlertScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* Profile */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
