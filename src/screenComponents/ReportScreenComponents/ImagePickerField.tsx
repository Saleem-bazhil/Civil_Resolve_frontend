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
        <View>
            {/* Label */}
            <Text className="font-semibold mb-2">Photos (Optional)</Text>

            {/* Action Buttons */}
            <View className="flex-row gap-3 mb-3">
                <Pressable
                    onPress={takePhoto}
                    className="flex-1 border border-dashed border-gray-400 rounded-xl p-4 items-center"
                >
                    <Ionicons name="camera-outline" size={22} color="#6b7280" />
                    <Text className="text-xs text-gray-500 mt-1">Camera</Text>
                </Pressable>

                <Pressable
                    onPress={pickFromGallery}
                    className="flex-1 border border-dashed border-gray-400 rounded-xl p-4 items-center"
                >
                    <Ionicons name="image-outline" size={22} color="#6b7280" />
                    <Text className="text-xs text-gray-500 mt-1">Gallery</Text>
                </Pressable>
            </View>

            {/* Image Preview Grid */}
            <View className="flex-row flex-wrap gap-3">
                {images.map((img, index) => (
                    <View key={index} className="relative">
                        <Image
                            source={{ uri: img.uri }}
                            className="w-24 h-24 rounded-xl"
                        />
                        <Pressable
                            onPress={() => removeImage(index)}
                            className="absolute -top-2 -right-2 bg-white rounded-full"
                        >
                            <Ionicons name="close-circle" size={22} color="red" />
                        </Pressable>
                    </View>
                ))}
            </View>

            {/* Counter */}
            <Text className="text-xs text-gray-500 mt-2">
                {images.length}/{max} photos • Add clear images of the issue
            </Text>
        </View>
    );
};

export default ImagePickerField;
