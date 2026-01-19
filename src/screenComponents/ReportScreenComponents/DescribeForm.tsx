import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import ImagePickerField from "./ImagePickerField";

const DescribeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<any[]>([]);

  const submitDemo = () => {
    console.log({ title, description, images });
  };

  return (
    <ScrollView
      className="bg-white"
      contentContainerStyle={{ padding: 24, paddingBottom: 120 }}
    >
      {/* Header */}
      <Text className="text-2xl font-semibold mb-1">
        Describe the Issue
      </Text>
      <Text className="text-gray-400 mb-6">
        Provide details to help us understand the problem
      </Text>

      {/* Title */}
      <View className="mb-5">
        <Text className="font-medium mb-1">Issue Title *</Text>
        <TextInput
          placeholder="Brief summary of the issue"
          value={title}
          onChangeText={setTitle}
          className="border border-gray-300 rounded-xl p-3"
        />
      </View>

      {/* Description */}
      <View className="mb-5">
        <Text className="font-medium mb-1">Description *</Text>
        <TextInput
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          placeholder="Explain the issue in detail. What did you observe?"
          value={description}
          onChangeText={setDescription}
          className="border border-gray-300 rounded-xl p-3"
        />
      </View>

      {/* Photos */}
      <ImagePickerField max={3} onChange={setImages} />

      {/* Continue Button */}
      <Pressable
        onPress={submitDemo}
        className="bg-blue-600 rounded-xl p-4 mt-10 items-center"
      >
        <Text className="text-white font-semibold text-base">
          Continue
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default DescribeForm;
