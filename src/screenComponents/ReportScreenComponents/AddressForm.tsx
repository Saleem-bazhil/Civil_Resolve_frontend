import React, { useState, useRef } from "react";
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
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import UseCurrentLocation from "./UseCurrentLocation";

const AddressForm = () => {
    const [address, setAddress] = useState("");
    const [landmark, setLandmark] = useState("");
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const landmarkRef = useRef<TextInput>(null);

    const handleSubmit = () => {
        console.log({ address, landmark });
    };

    return (
        <View className="flex-1 bg-gray-50">
            <StatusBar barStyle="light-content" backgroundColor="#1E3A8A" />

            {/* Header */}
            <View className="relative z-10">
                <LinearGradient
                    colors={["#1E3A8A", "#2563EB"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="pt-16 pb-32 px-6 rounded-b-3xl"
                    style={{ elevation: 8 }}
                >
                    <View className="absolute right-0 top-10 opacity-10">
                        <Ionicons name="map" size={120} color="white" />
                    </View>
                    <Text className="text-white text-3xl font-bold mb-2">
                        Location Details
                    </Text>
                    <Text className="text-blue-100 text-base font-medium opacity-90 pr-10">
                        Help us locate the issue accurately.
                    </Text>
                </LinearGradient>
            </View>

            {/* form card*/}
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
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 8,
                        }}
                    >
                        <UseCurrentLocation onAddressChange={setAddress} />

                        {/* Divider */}
                        <View className="flex-row items-center mb-6 mt-2">
                            <View className="h-px bg-gray-100 flex-1" />
                            <Text className="text-gray-400 text-xs px-3 font-bold uppercase tracking-widest">
                                Or enter manually
                            </Text>
                            <View className="h-px bg-gray-100 flex-1" />
                        </View>

                        {/* Address */}
                        <View className="mb-6">
                            <Text className="text-gray-500 font-bold mb-2 ml-1 text-xs uppercase tracking-widest">
                                Address / Area <Text className="text-red-500">*</Text>
                            </Text>

                            <View
                                className={`flex-row items-center bg-gray-50 border rounded-2xl px-4 h-14 ${focusedField === "address"
                                        ? "border-blue-600 bg-blue-50"
                                        : "border-gray-200"
                                    }`}
                            >
                                <Ionicons
                                    name="location-outline"
                                    size={22}
                                    color={focusedField === "address" ? "#2563EB" : "#9CA3AF"}
                                    style={{ marginRight: 12 }}
                                />
                                <TextInput
                                    placeholder="Street name, area, sector"
                                    placeholderTextColor="#9CA3AF"
                                    value={address}
                                    onChangeText={setAddress}
                                    onFocus={() => setFocusedField("address")}
                                    onBlur={() => setFocusedField(null)}
                                    className="flex-1 text-gray-800 text-base font-medium h-full"
                                    selectionColor="#2563EB"
                                    returnKeyType="next"
                                    onSubmitEditing={() => landmarkRef.current?.focus()}
                                />
                            </View>
                        </View>

                        {/* Landmark */}
                        <View>
                            <Text className="text-gray-500 font-bold mb-2 ml-1 text-xs uppercase tracking-widest">
                                Nearby Landmark
                            </Text>

                            <View
                                className={`flex-row items-center bg-gray-50 border rounded-2xl px-4 h-14 ${focusedField === "landmark"
                                        ? "border-blue-600 bg-blue-50"
                                        : "border-gray-200"
                                    }`}
                            >
                                <Ionicons
                                    name="business-outline"
                                    size={22}
                                    color={focusedField === "landmark" ? "#2563EB" : "#9CA3AF"}
                                    style={{ marginRight: 12 }}
                                />
                                <TextInput
                                    ref={landmarkRef}
                                    placeholder="e.g. Near City Mall, Opposite Park"
                                    placeholderTextColor="#9CA3AF"
                                    value={landmark}
                                    onChangeText={setLandmark}
                                    onFocus={() => setFocusedField("landmark")}
                                    onBlur={() => setFocusedField(null)}
                                    className="flex-1 text-gray-800 text-base font-medium h-full"
                                    selectionColor="#2563EB"
                                    returnKeyType="done"
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>

                {/* Footer */}
                <View
                    className="bg-white px-6 pt-5 pb-8 border-t border-gray-100"
                    style={{ elevation: 15 }}
                >
                    <Pressable
                        onPress={handleSubmit}
                        className="rounded-2xl overflow-hidden"
                        style={{ elevation: 4 }}
                    >
                        <LinearGradient
                            colors={["#1E3A8A", "#2563EB"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            className="h-14 items-center justify-center flex-row"
                        >
                            <Text className="text-white font-bold text-lg mr-2">
                                Review & Submit
                            </Text>
                            <Ionicons name="arrow-forward" size={20} color="white" />
                        </LinearGradient>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default AddressForm;