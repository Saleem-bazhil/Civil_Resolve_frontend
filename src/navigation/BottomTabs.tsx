import React from "react";
import { View, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  HomeScreen,
  IssuesScreen,
  AlertScreen,
  ProfileScreen,
  ReportIssueScreen,
  OfficerHome,
  OfficerIssues,
} from "../imports/Imports";


const Tab = createBottomTabNavigator();
type Props = {
  role: "ADMIN" | "OFFICER" | "CITIZEN";
}

export default function BottomTabs({ role }: Props) {
  const PRIMARY_COLOR = "#3730a3";
  const isOfficer = role === "OFFICER";
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#ffffff",
          elevation: 4,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.05,
          shadowRadius: 8,
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          fontWeight: "800",
          fontSize: 18,
          color: "#0f172a",
          letterSpacing: 0.5,
        },
        tabBarShowLabel: true,

        tabBarStyle: {
          // position: "absolute",
          backgroundColor: "#ffffff",
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 8,
          paddingTop: 6,
          borderTopWidth: 0,

          // elevation
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
        name={isOfficer ? "Home" : "Home"}
        component={isOfficer ? OfficerHome : HomeScreen}
        options={{
          headerShown: false,
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
        component={isOfficer ? OfficerIssues : IssuesScreen}
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
      {!isOfficer && (
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
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.25,
                    shadowRadius: 8,
                    elevation: 5,
                  }}
                >
                  <AntDesign name="plus" size={28} color="white" />
                </View>
              </View>
            ),
          }}
        />

      )}
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
