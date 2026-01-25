import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    Alert,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../api/Axios";

const EditProfile = () => {
    const navigation = useNavigation<any>();
    
    // Logic States
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);

    const [focusedField, setFocusedField] = useState<string | null>(null);

    // Form Data
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await api.get("/users/profile");
            const { firstname, lastname, mobile, address } = response.data;
            setFirstname(firstname || "");
            setLastname(lastname || "");
            setMobile(mobile || "");
            setAddress(address || "");
        } catch (error) {
            console.error("Error fetching profile:", error);
            Alert.alert("Error", "Failed to load profile data");
        } finally {
            setInitialLoading(false);
        }
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            await api.patch("/users/profile", {
                firstname,
                lastname,
                mobile,
                address,
            });
            Alert.alert("Success", "Profile updated successfully");
            navigation.goBack();
        } catch (error) {
            console.error("Error updating profile:", error);
            Alert.alert("Error", "Failed to update profile");
        } finally {
            setLoading(false);
        }
    };


    const renderInput = (
        label: string,
        value: string,
        setValue: (text: string) => void,
        fieldKey: string,
        iconName: keyof typeof Ionicons.glyphMap,
        placeholder: string,
        keyboardType: "default" | "phone-pad" = "default"
    ) => (
        <View className="mb-6">
            <Text className="text-gray-500 text-xs font-bold uppercase mb-2 ml-1 tracking-widest">
                {label}
            </Text>
            <View
                className={`flex-row items-center rounded-2xl px-4 h-14 border ${
                    focusedField === fieldKey
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 bg-gray-50"
                }`}
            >
                <Ionicons
                    name={iconName}
                    size={20}
                    color={focusedField === fieldKey ? "#2563EB" : "#9CA3AF"}
                    style={{ marginRight: 12 }}
                />
                <TextInput
                    value={value}
                    onChangeText={setValue}
                    placeholder={placeholder}
                    placeholderTextColor="#9CA3AF"
                    onFocus={() => setFocusedField(fieldKey)}
                    onBlur={() => setFocusedField(null)}
                    className="flex-1 h-full text-gray-800 text-base font-medium"
                    keyboardType={keyboardType}
                />
            </View>
        </View>
    );

    if (initialLoading) {
        return (
            <View className="flex-1 justify-center items-center bg-gray-50">
                <ActivityIndicator size="large" color="#2563EB" />
            </View>
        );
    }

    return (
        <View className="flex-1 bg-gray-50">
            <StatusBar barStyle="light-content" />

            {/* HEADER */}
            <View>
                <LinearGradient
                    colors={["#1E3A8A", "#2563EB"]}
                    className="px-6 pt-16 pb-32 rounded-b-[32px]"
                >
                    {/* Background Icon Decoration */}
                    <View className="absolute right-0 top-10 opacity-20">
                        <Ionicons name="person-circle-outline" size={140} color="white" />
                    </View>

                    {/* Back Button */}
                    <Pressable 
                        onPress={() => navigation.goBack()}
                        className="mb-6 w-10 h-10 bg-white/20 rounded-full items-center justify-center"
                    >
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </Pressable>

                    <Text className="text-white text-3xl font-bold mb-2">
                        Edit Profile
                    </Text>
                    <Text className="text-blue-100 text-base font-medium opacity-90">
                        Update your personal details below
                    </Text>
                </LinearGradient>
            </View>

            {/* FORM */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                className="flex-1"
            >
                <ScrollView
                    className="-mt-20 flex-1"
                    contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View
                        className="bg-white rounded-3xl p-8 mb-6"
                        style={{
                            elevation: 10,
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 10 },
                            shadowOpacity: 0.1,
                            shadowRadius: 10,
                        }}
                    >
                        {renderInput(
                            "First Name",
                            firstname,
                            setFirstname,
                            "firstname",
                            "person-outline",
                            "Enter First Name"
                        )}

                        {renderInput(
                            "Last Name",
                            lastname,
                            setLastname,
                            "lastname",
                            "person-outline",
                            "Enter Last Name"
                        )}

                        {renderInput(
                            "Phone Number",
                            mobile,
                            setMobile,
                            "mobile",
                            "call-outline",
                            "Enter Phone Number",
                            "phone-pad"
                        )}

                        {renderInput(
                            "Address",
                            address,
                            setAddress,
                            "address",
                            "location-outline",
                            "Enter Location"
                        )}
                    </View>
                </ScrollView>

                {/* SAVE BUTTON */}
                <View className="bg-white px-6 py-6 border-t border-gray-100">
                    <Pressable
                        onPress={handleSave}
                        disabled={loading}
                        className="rounded-2xl overflow-hidden"
                    >
                        <LinearGradient
                            colors={["#1E3A8A", "#2563EB"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            className="h-14 items-center justify-center flex-row"
                        >
                             {loading ? (
                                <ActivityIndicator color="white" className="mr-2" />
                            ) : null}
                            <Text className="text-white font-bold text-lg tracking-wide">
                                {loading ? "Saving..." : "Save Changes"}
                            </Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default EditProfile;