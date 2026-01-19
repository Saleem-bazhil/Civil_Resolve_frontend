import { View, Text, Pressable, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
    max?: number;
    onChange: (images: any[]) => void;
};

const ImagePickerField = ({ max = 3, onChange }: Props) => {
    const [images, setImages] = useState<any[]>([]);

    // Pick from Gallery
    const pickFromGallery = async () => {
        const permission =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            Alert.alert("Permission required", "Please allow gallery access");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            quality: 0.7,
        });

        if (!result.canceled) {
            addImage(result.assets[0]);
        }
    };

    // Take Photo from Camera
    const takePhoto = async () => {
        const permission =
            await ImagePicker.requestCameraPermissionsAsync();
        if (!permission.granted) {
            Alert.alert("Permission required", "Please allow camera access");
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            quality: 0.7,
        });

        if (!result.canceled) {
            addImage(result.assets[0]);
        }
    };

    // maximum image and state update 
    const addImage = (img: any) => {
        if (images.length >= max) {
            Alert.alert(`Maximum ${max} photos allowed`);
            return;
        }

        const updated = [...images, img];
        setImages(updated);
        onChange(updated);
    };

    // Remove image
    const removeImage = (index: number) => {
        const updated = images.filter((_, i) => i !== index);
        setImages(updated);
        onChange(updated);
    };

    return (
     <View className="mb-4">
      {/* Header Row */}
      <View className="flex-row justify-between items-center mb-3">
        <Text className="font-bold text-gray-800 text-base">Photos</Text>
        <Text className="text-xs text-gray-400 font-medium">
          {images.length}/{max} uploaded
        </Text>
      </View>

      {/* Action Buttons - Modernized */}
      <View className="flex-row gap-3 mb-4">
        <Pressable
          onPress={takePhoto}
          className="flex-1 bg-blue-50 border border-blue-100 rounded-2xl p-4 items-center justify-center active:bg-blue-100"
        >
          <View className="bg-white p-2 rounded-full mb-2 shadow-sm">
            <Ionicons name="camera" size={20} color="#2563EB" />
          </View>
          <Text className="text-sm font-semibold text-blue-700">Camera</Text>
        </Pressable>

        <Pressable
          onPress={pickFromGallery}
          className="flex-1 bg-gray-50 border border-gray-100 rounded-2xl p-4 items-center justify-center active:bg-gray-100"
        >
          <View className="bg-white p-2 rounded-full mb-2 shadow-sm">
            <Ionicons name="images" size={20} color="#4B5563" />
          </View>
          <Text className="text-sm font-semibold text-gray-700">Gallery</Text>
        </Pressable>
      </View>

      {/* Image Preview Grid */}
      {images.length > 0 && (
        <View className="flex-row flex-wrap gap-3">
          {images.map((img, index) => (
            <View key={index} className="relative shadow-sm">
              <Image
                source={{ uri: img.uri }}
                className="w-24 h-24 rounded-2xl border border-gray-100"
              />
              <Pressable
                onPress={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md border border-gray-100"
              >
                <Ionicons name="close" size={16} color="#EF4444" />
              </Pressable>
            </View>
          ))}
        </View>
      )}

      {/* Helper Text */}
      <Text className="text-xs text-gray-400 mt-2 ml-1">
        • Clear images help us resolve the issue faster
      </Text>
    </View>
    );
};

export default ImagePickerField;
