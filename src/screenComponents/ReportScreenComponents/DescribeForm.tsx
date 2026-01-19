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
import ImagePickerField from "./ImagePickerField";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DescribeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<any[]>([]);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const navigation = useNavigation<any>();

  const MAX_DESC_LENGTH = 500;

const submitDemo = () => {
  navigation.navigate("AddressForm", {
    title,
    description,
    images,
  });
};


  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content"  />

      {/* Header with Texture Icon */}
      <View className="relative z-10">
        <LinearGradient
          colors={["#1E3A8A", "#2563EB"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="pt-16 pb-32 px-6 rounded-b-3xl"
          style={{ elevation: 10 }}
        >
          {/* Background Icon */}
          <View className="absolute right-0 top-10 opacity-10">
            <Ionicons name="chatbubbles" size={120} color="white" />
          </View>

          <Text className="text-white text-3xl font-bold mb-2">
            Describe Issue
          </Text>
          <Text className="text-blue-100 text-base font-medium opacity-90 pr-8 leading-5">
            Please provide detailed information so we can resolve this quickly.
          </Text>
        </LinearGradient>
      </View>

      {/*form card*/}
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
            {/* Title */}
            <View className="mb-6">
              <Text className="text-gray-500 font-bold mb-2 ml-1 text-xs uppercase tracking-widest">
                Issue Title <Text className="text-red-500">*</Text>
              </Text>

              <View
                className={`flex-row items-center bg-gray-50 border rounded-2xl px-4 h-14 ${
                  focusedField === "title"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200"
                }`}
              >
                <View className="mr-3">
                  <Ionicons
                    name="alert-circle-outline"
                    size={22}
                    color={focusedField === "title" ? "#2563EB" : "#9CA3AF"}
                  />
                </View>
                <TextInput
                  placeholder="Brief summary of the isssue"
                  placeholderTextColor="#9CA3AF"
                  value={title}
                  onChangeText={setTitle}
                  onFocus={() => setFocusedField("title")}
                  onBlur={() => setFocusedField(null)}
                  className="flex-1 text-gray-800 text-base font-medium h-full"
                  selectionColor="#2563EB"
                />
              </View>
            </View>

            {/* Description */}
            <View className="mb-6">
              <View className="flex-row justify-between items-center mb-2 ml-1">
                <Text className="text-gray-500 font-bold text-xs uppercase tracking-widest">
                  Description <Text className="text-red-500">*</Text>
                </Text>
                <Text className="text-xs text-gray-400 font-medium">
                  {description.length}/{MAX_DESC_LENGTH}
                </Text>
              </View>

              <View
                className={`bg-gray-50 border rounded-2xl px-4 py-3 ${
                  focusedField === "desc"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200"
                }`}
              >
                <TextInput
                  multiline
                  numberOfLines={6}
                  maxLength={MAX_DESC_LENGTH}
                  textAlignVertical="top"
                  placeholder="Explain the issue in detail.what did you observe?. How long has it been happening?"
                  placeholderTextColor="#9CA3AF"
                  value={description}
                  onChangeText={setDescription}
                  onFocus={() => setFocusedField("desc")}
                  onBlur={() => setFocusedField(null)}
                  className="text-gray-800 text-base font-medium min-h-[140px]"
                  selectionColor="#2563EB"
                />
              </View>
            </View>

            {/* Divider */}
            <View className="flex-row items-center mb-6">
              <View className="h-px bg-gray-200 flex-1" />
              <Text className="text-gray-400 text-xs px-3 font-bold">
                ATTACHMENTS
              </Text>
              <View className="h-px bg-gray-200 flex-1" />
            </View>

            {/* Photos Section */}
            <ImagePickerField max={3} onChange={setImages} />
          </View>
        </ScrollView>

        {/* Sticky Footer */}
        <View
          className="bg-white px-6 pt-5 pb-8 border-t border-gray-100"
          style={{
            elevation: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.05,
            shadowRadius: 5,
          }}
        >
          <Pressable
            onPress={submitDemo}
            className="rounded-2xl overflow-hidden"
            style={{
              elevation: 5,
              shadowColor: "#2563EB",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 5,
            }}
          >
            <LinearGradient
              colors={["#1E3A8A", "#2563EB"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="h-14 items-center justify-center flex-row"
            >
              <Text className="text-white font-bold text-lg mr-2">
                Continue
              </Text>
              <Ionicons name="paper-plane" size={20} color="white" />
            </LinearGradient>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default DescribeForm;