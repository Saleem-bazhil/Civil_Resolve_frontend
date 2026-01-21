import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';

interface PhotoCardProps {
    imageUrl?: string | null;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ imageUrl }) => {
    return (
        <View className="my-5">
            <View className="bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 overflow-hidden">

                <View className="p-5 pb-3 flex-row justify-between items-center">
                    <View className="flex-row items-center space-x-2">
                        <Text className="text-[18px] font-bold text-gray-900 tracking-tight">
                            Photos
                        </Text>
                    </View>
                </View>

                <View className="px-5 pb-5">
                    <View className="relative">
                        <Image
                            source={{ uri: imageUrl || "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=1000&auto=format&fit=crop" }}
                            className="w-full h-56 rounded-2xl border border-gray-200"
                            resizeMode="cover"
                        />
                        <View className="absolute bottom-3 right-3">
                            <TouchableOpacity className="bg-white/90 p-2 rounded-xl shadow-sm backdrop-blur-md border border-white/20">
                                <Ionicons name="expand-outline" size={18} color="#1F2937" />
                            </TouchableOpacity>
                        </View>

                        <View className="absolute top-3 left-3 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                            <Text className="text-[10px] font-medium text-white">
                                Jan 8 • 10:32 AM
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    );
};

export default PhotoCard;