import {
    View,
    Text,
    ScrollView,
    TextInput,
    Pressable,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation<any>();
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className="flex-1 bg-gray-50">
            <StatusBar barStyle="light-content" backgroundColor="#1E3A8A" />

            {/* header */}
            <View>
                <LinearGradient
                    colors={["#1E3A8A", "#2563EB"]}
                    className="px-6 pt-28 pb-44 rounded-b-[32px]"
                >
                    {/* background icon */}
                    <View className="absolute right-0 top-6 opacity-20">
                        <Ionicons name="log-in-outline" size={160} color="white" />
                    </View>

                    <Text className="text-white text-3xl font-bold mb-2">
                        Welcome Back
                    </Text>
                    <Text className="text-blue-100 text-base font-medium opacity-90">
                        Login to continue reporting civic issues
                    </Text>
                </LinearGradient>
            </View>

            {/* form */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                className="flex-1"
            >
                <ScrollView
                    className="-mt-20 flex-1"
                    contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* card */}
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
                        {/* Email */}
                        <View className="mb-6">
                            <Text className="text-gray-500 text-xs font-bold uppercase mb-2 ml-1 tracking-widest">
                                Email
                            </Text>
                            <View
                                className={`flex-row items-center rounded-2xl px-4 h-14 border ${focusedField === "email"
                                    ? "border-blue-600 bg-blue-50"
                                    : "border-gray-200 bg-gray-50"
                                    }`}
                            >
                                <Ionicons
                                    name="mail-outline"
                                    size={20}
                                    color={focusedField === "email" ? "#2563EB" : "#9CA3AF"}
                                    style={{ marginRight: 12 }}
                                />
                                <TextInput
                                    placeholder="Enter your email"
                                    placeholderTextColor="#9CA3AF"
                                    onFocus={() => setFocusedField("email")}
                                    onBlur={() => setFocusedField(null)}
                                    className="flex-1 h-full text-gray-800 text-base font-medium"
                                    selectionColor="#2563EB"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                />
                            </View>
                        </View>

                        {/* Password */}
                        <View className="mb-8">
                            <Text className="text-gray-500 text-xs font-bold uppercase mb-2 ml-1 tracking-widest">
                                Password
                            </Text>
                            <View
                                className={`flex-row items-center rounded-2xl px-4 h-14 border ${focusedField === "password"
                                    ? "border-blue-600 bg-blue-50"
                                    : "border-gray-200 bg-gray-50"
                                    }`}
                            >
                                <Ionicons
                                    name="lock-closed-outline"
                                    size={20}
                                    color={focusedField === "password" ? "#2563EB" : "#9CA3AF"}
                                    style={{ marginRight: 12 }}
                                />
                                <TextInput
                                    secureTextEntry={!showPassword}
                                    placeholder="Enter your password"
                                    placeholderTextColor="#9CA3AF"
                                    onFocus={() => setFocusedField("password")}
                                    onBlur={() => setFocusedField(null)}
                                    className="flex-1 h-full text-gray-800 text-base font-medium"
                                    selectionColor="#2563EB"
                                />
                                <Pressable onPress={() => setShowPassword(!showPassword)}>
                                    <Ionicons
                                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                                        size={20}
                                        color="#9CA3AF"
                                    />
                                </Pressable>
                            </View>
                        </View>

                        {/* Sign Up */}
                        <View className="flex-row justify-center items-center">
                            <Text className="text-gray-500 font-medium">
                                Don’t have an account?
                            </Text>
                            <Pressable onPress={() => navigation.navigate("signup")}>
                                <Text className="text-blue-600 font-bold ml-1">
                                    Sign Up
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>

                {/* footer button */}
                <View className="bg-white px-6 py-6 border-t border-gray-100">
                    <Pressable
                        onPress={() => navigation.navigate("MainTabs")}
                        className="rounded-2xl overflow-hidden"
                    >
                        <LinearGradient
                            colors={["#1E3A8A", "#2563EB"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            className="h-14 items-center justify-center flex-row"
                        >
                            <Text className="text-white font-bold text-lg tracking-wide">
                                Login
                            </Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default Login;
