import React, { useEffect, useState } from "react";
import api from "../../api/Axios";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const COLORS = {
    primary: "#3730a3", 
    gradientStart: "#3730a3",
    gradientEnd: "#4f46e5", 
};

const ProfileCard = () => {
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation<any>();

    useFocusEffect(
        React.useCallback(() => {
            const fetchProfile = async () => {
                try {
                    const response = await api.get("/users/profile");
                    setProfile(response.data);
                } catch (error) {
                    console.error("Error fetching profile:", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchProfile();
        }, [])
    );

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center bg-gray-50 h-64 rounded-[28px]">
                <Text className="text-gray-400">Loading profile...</Text>
            </View>
        );
    }

    if (!profile) {
        return (
            <View className="flex-1 justify-center items-center bg-gray-50 h-64 rounded-[28px]">
                <Text className="text-gray-400">Failed to load profile</Text>
            </View>
        );
    }

    return (
        <View className="flex-1 justify-center rounded-[28px] bg-gray-50">
            <View
                className="w-full bg-white rounded-[28px] overflow-hidden shadow-xl"
                style={{ elevation: 10 }}
            >

                {/* header blue block*/}
                <LinearGradient
                    colors={[COLORS.gradientStart, COLORS.gradientEnd]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="h-36 relative"
                >
                    {/* circle background */}
                    <View className="absolute -top-10 -right-10 w-48 h-48 bg-white opacity-10 rounded-full" />
                    <View className="absolute top-10 -left-10 w-24 h-24 bg-white opacity-10 rounded-full" />
                </LinearGradient>

                {/* avatar */}
                <View className="items-center -mt-20 px-6">
                    <View className="relative">
                        <View className="w-36 h-36 bg-white rounded-full p-1.5 justify-center items-center">
                            <View className="w-full h-full bg-blue-50 rounded-full justify-center items-center border border-blue-100 overflow-hidden">
                                <Ionicons name="person" size={56} color={COLORS.primary} />
                            </View>
                        </View>
                        <View className="absolute bottom-2 right-2 bg-white rounded-full p-1">
                            <View className="bg-green-500 rounded-full w-7 h-7 items-center justify-center">
                                <Ionicons name="checkmark" size={14} color="white" />
                            </View>
                        </View>
                    </View>

                    {/* name */}
                    <View className="items-center mt-3 mb-6 space-y-2">
                        <Text className="text-2xl font-bold text-gray-900">
                            {profile.firstname} {profile.lastname || ""}
                        </Text>
                    </View>
                </View>

                {/*detail email,phone,location*/}
                <View className="px-6 space-y-3">

                    {/* email */}
                    <View className="flex-row items-center p-3.5 bg-blue-50/50 rounded-2xl border border-blue-100/50 mb-4">
                        <View className="w-10 h-10 bg-white rounded-full items-center justify-center mr-4 shadow-sm">
                            <Ionicons name="mail" size={18} color={COLORS.primary} />
                        </View>
                        <View className="flex-1">
                            <Text className="text-[10px] text-gray-400 font-bold uppercase mb-0.5">
                                Email Address
                            </Text>
                            <Text className="text-sm font-semibold text-gray-800">
                                {profile.email}
                            </Text>
                        </View>
                    </View>

                    {/* phone */}
                    <View className="flex-row items-center p-3.5 bg-blue-50/50 rounded-2xl border border-blue-100/50 mb-4">
                        <View className="w-10 h-10 bg-white rounded-full items-center justify-center mr-4 shadow-sm">
                            <Ionicons name="call" size={18} color={COLORS.primary} />
                        </View>
                        <View className="flex-1">
                            <Text className="text-[10px] text-gray-400 font-bold uppercase mb-0.5">
                                Phone Number
                            </Text>
                            <Text className="text-sm font-semibold text-gray-800">
                                {profile.mobile || "N/A"}
                            </Text>
                        </View>
                    </View>

                    {/* officer details or location */}
                    {profile.role === "OFFICER" && profile.officer ? (
                        <>
                            {/* Department */}
                            <View className="flex-row items-center p-3.5 bg-blue-50/50 rounded-2xl border border-blue-100/50 mb-4">
                                <View className="w-10 h-10 bg-white rounded-full items-center justify-center mr-4 shadow-sm">
                                    <Ionicons name="business" size={18} color={COLORS.primary} />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-[10px] text-gray-400 font-bold uppercase mb-0.5">
                                        Department
                                    </Text>
                                    <Text className="text-sm font-semibold text-gray-800">
                                        {profile.officer.department?.name || "N/A"}
                                    </Text>
                                </View>
                            </View>

                            {/* Area */}
                            <View className="flex-row items-center p-3.5 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                                <View className="w-10 h-10 bg-white rounded-full items-center justify-center mr-4 shadow-sm">
                                    <Ionicons name="map" size={18} color={COLORS.primary} />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-[10px] text-gray-400 font-bold uppercase mb-0.5">
                                        Assigned Area
                                    </Text>
                                    <Text className="text-sm font-semibold text-gray-800">
                                        {profile.officer.area || "N/A"}
                                    </Text>
                                </View>
                            </View>
                        </>
                    ) : (
                        /* location for citizen */
                        <View className="flex-row items-center p-3.5 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                            <View className="w-10 h-10 bg-white rounded-full items-center justify-center mr-4 shadow-sm">
                                <Ionicons name="location" size={18} color={COLORS.primary} />
                            </View>
                            <View className="flex-1">
                                <Text className="text-[10px] text-gray-400 font-bold uppercase mb-0.5">
                                    Location
                                </Text>
                                <Text className="text-sm font-semibold text-gray-800">
                                    {profile.address || profile.area || "N/A"}
                                </Text>
                            </View>
                        </View>
                    )}

                </View>

                {/* edit profile */}
                <View className="px-6 mt-6 mb-6">
                    <Pressable
                        onPress={() => navigation.navigate("EditProfile")}
                        className="active:opacity-90"
                    >
                        <View className="rounded-xl overflow-hidden shadow-lg shadow-blue-500/30">
                            <LinearGradient
                                colors={[COLORS.gradientStart, COLORS.gradientEnd]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                className="w-full py-4 items-center"
                            >
                                <Text className="text-white font-bold text-base tracking-wide">
                                    Edit Profile
                                </Text>
                            </LinearGradient>
                        </View>
                    </Pressable>
                </View>

            </View>
        </View>
    );
};

export default ProfileCard;