import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
    View,
    Text,
    ScrollView,
    TextInput,
    Pressable,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../api/Axios";

const Signup = () => {
    const navigation = useNavigation<any>();
    const insets = useSafeAreaInsets();

    const [focusedField, setFocusedField] = useState<string | null>(null);

    /* form states */
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    /* signup logic */
    const handleSignup = async () => {
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            Alert.alert("error", "all fields are required");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("error", "passwords do not match");
            return;
        }

        try {
            setLoading(true);

            await api.post("/users/signup", {
                firstname: firstName,
                lastname: lastName,
                email,
                password,
            });

            Alert.alert("success", "account created successfully");
            navigation.navigate("login");
        } catch (err: any) {
            console.log("signup error:", err?.response?.data || err);
            Alert.alert("signup failed", "email may already exist");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View className="flex-1 bg-gray-50">
            <StatusBar barStyle="light-content" />

            {/* header */}
            <View className="relative z-10">
                <LinearGradient
                    colors={["#1E3A8A", "#2563EB"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="pt-16 pb-32 px-6 rounded-b-3xl"
                    style={{ elevation: 10 }}
                >
                    <View className="absolute right-0 top-10 opacity-10">
                        <Ionicons name="person-add" size={120} color="white" />
                    </View>

                    <Text className="text-white text-3xl font-bold mb-2">
                        Create Account
                    </Text>
                    <Text className="text-blue-100 text-base font-medium opacity-90">
                        Join us to report civic issues in your area
                    </Text>
                </LinearGradient>
            </View>

            {/* form */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                className="flex-1"
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    className="-mt-20 flex-1 z-20"
                    contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
                >
                    <View
                        className="bg-white rounded-3xl p-6 mb-6"
                        style={{
                            elevation: 5,
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.1,
                            shadowRadius: 10,
                        }}
                    >
                        {/* first name */}
                        <View className="mb-6">
                            <Text className="text-gray-500 font-bold mb-2 ml-1 text-xs uppercase tracking-widest">
                                First Name
                            </Text>
                            <View
                                className={`flex-row items-center bg-gray-50 border rounded-2xl px-4 h-14 ${focusedField === "fname"
                                    ? "border-blue-600 bg-blue-50"
                                    : "border-gray-200"
                                    }`}
                            >
                                <Ionicons
                                    name="person-outline"
                                    size={22}
                                    color={focusedField === "fname" ? "#2563EB" : "#9CA3AF"}
                                />
                                <TextInput
                                    value={firstName}
                                    onChangeText={setFirstName}
                                    placeholder="Enter the first name"
                                    onFocus={() => setFocusedField("fname")}
                                    onBlur={() => setFocusedField(null)}
                                    className="flex-1 text-gray-800 text-base font-medium h-full ml-3"
                                />
                            </View>
                        </View>

                        {/* last name */}
                        <View className="mb-6">
                            <Text className="text-gray-500 font-bold mb-2 ml-1 text-xs uppercase tracking-widest">
                                Last Name
                            </Text>
                            <View
                                className={`flex-row items-center bg-gray-50 border rounded-2xl px-4 h-14 ${focusedField === "lname"
                                    ? "border-blue-600 bg-blue-50"
                                    : "border-gray-200"
                                    }`}
                            >
                                <Ionicons
                                    name="person-outline"
                                    size={22}
                                    color={focusedField === "lname" ? "#2563EB" : "#9CA3AF"}
                                />
                                <TextInput
                                    value={lastName}
                                    onChangeText={setLastName}
                                    placeholder="Enter the last name"
                                    onFocus={() => setFocusedField("lname")}
                                    onBlur={() => setFocusedField(null)}
                                    className="flex-1 text-gray-800 text-base font-medium h-full ml-3"
                                />
                            </View>
                        </View>

                        {/* email */}
                        <View className="mb-6">
                            <Text className="text-gray-500 font-bold mb-2 ml-1 text-xs uppercase tracking-widest">
                                Email
                            </Text>
                            <View
                                className={`flex-row items-center bg-gray-50 border rounded-2xl px-4 h-14 ${focusedField === "email"
                                    ? "border-blue-600 bg-blue-50"
                                    : "border-gray-200"
                                    }`}
                            >
                                <Ionicons
                                    name="mail-outline"
                                    size={22}
                                    color={focusedField === "email" ? "#2563EB" : "#9CA3AF"}
                                />
                                <TextInput
                                    value={email}
                                    onChangeText={setEmail}
                                    placeholder="Enter the email"
                                    onFocus={() => setFocusedField("email")}
                                    onBlur={() => setFocusedField(null)}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    className="flex-1 text-gray-800 text-base font-medium h-full ml-3"
                                />
                            </View>
                        </View>

                        {/* password */}
                        <View className="mb-6">
                            <Text className="text-gray-500 font-bold mb-2 ml-1 text-xs uppercase tracking-widest">
                                Password
                            </Text>
                            <View
                                className={`flex-row items-center bg-gray-50 border rounded-2xl px-4 h-14 ${focusedField === "password"
                                    ? "border-blue-600 bg-blue-50"
                                    : "border-gray-200"
                                    }`}
                            >
                                <Ionicons
                                    name="lock-closed-outline"
                                    size={22}
                                    color={focusedField === "password" ? "#2563EB" : "#9CA3AF"}
                                />
                                <TextInput
                                    value={password}
                                    onChangeText={setPassword}
                                    placeholder="Enter the password"
                                    secureTextEntry
                                    onFocus={() => setFocusedField("password")}
                                    onBlur={() => setFocusedField(null)}
                                    className="flex-1 text-gray-800 text-base font-medium h-full ml-3"
                                />
                            </View>
                        </View>

                        {/* confirm password */}
                        <View>
                            <Text className="text-gray-500 font-bold mb-2 ml-1 text-xs uppercase tracking-widest">
                                Confirm Password
                            </Text>
                            <View
                                className={`flex-row items-center bg-gray-50 border rounded-2xl px-4 h-14 ${focusedField === "confirm"
                                    ? "border-blue-600 bg-blue-50"
                                    : "border-gray-200"
                                    }`}
                            >
                                <Ionicons
                                    name="lock-closed-outline"
                                    size={22}
                                    color={focusedField === "confirm" ? "#2563EB" : "#9CA3AF"}
                                />
                                <TextInput
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    placeholder="Enter the same password"
                                    secureTextEntry
                                    onFocus={() => setFocusedField("confirm")}
                                    onBlur={() => setFocusedField(null)}
                                    className="flex-1 text-gray-800 text-base font-medium h-full ml-3"
                                />
                            </View>
                        </View>

                        {/* login link */}
                        <View className="my-5 flex-row justify-center">
                            <Text className="font-medium text-gray-500">
                                Already have an account?{" "}
                            </Text>
                            <Pressable onPress={() => navigation.navigate("login")}>
                                <Text className="font-bold text-blue-600">Log In</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>

                {/* signup button */}
                <View
                    className="bg-white px-6 pt-5 border-t border-gray-100"
                    style={{ paddingBottom: insets.bottom + 6 }}
                >
                    <Pressable
                        onPress={handleSignup}
                        disabled={loading}
                        className="rounded-2xl overflow-hidden"
                    >
                        <LinearGradient
                            colors={["#1E3A8A", "#2563EB"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            className="h-14 items-center justify-center flex-row"
                        >
                            <Text className="text-white font-bold text-lg">
                                {loading ? "Signing up..." : "Sign Up"}
                            </Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default Signup;
