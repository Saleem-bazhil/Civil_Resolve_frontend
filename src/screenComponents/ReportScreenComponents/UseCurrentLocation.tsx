import React, { useState } from "react";
import {
    View,
    Text,
    Pressable,
    ActivityIndicator,
    Alert,
} from "react-native";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";

type Props = {
    onAddressChange: (address: string) => void;
};

const UseCurrentLocation = ({ onAddressChange }: Props) => {
    const [loading, setLoading] = useState(false);

    const fetchCurrentLocation = async () => {
        try {
            setLoading(true);

            const { status } =
                await Location.requestForegroundPermissionsAsync();

            if (status !== "granted") {
                Alert.alert(
                    "Permission Required",
                    "Location access is needed to auto-fill your address."
                );
                return;
            }

            // Get GPS coordinates
            const position = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.BestForNavigation,
            });

            const { latitude, longitude } = position.coords;

            // reverse geocode coordinates → address
            const geo = await Location.reverseGeocodeAsync({
                latitude,
                longitude,
            });

            if (!geo.length) {
                Alert.alert("Error", "Unable to fetch address details");
                return;
            }

            const g = geo[0];

            const formattedAddress = [
                g.name,
                g.street,
                g.district,
                g.subregion,
                g.city,
                g.postalCode,
                g.region,
                g.country,
            ]
                .filter(Boolean)
                .join(", ");

            onAddressChange(formattedAddress);
        } catch (error) {
            Alert.alert(
                "Location Error",
                "Something went wrong while fetching location."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Pressable
            onPress={fetchCurrentLocation}
            disabled={loading}
            style={({ pressed }) => ({
                transform: [{ scale: pressed ? 0.98 : 1 }],
            })}
            className={`border border-dashed border-blue-200 rounded-2xl py-6 items-center justify-center mb-6 bg-blue-50/50 ${loading ? "opacity-70" : "active:bg-blue-100/50"
                }`}
        >
            {loading ? (
                <View className="flex-row items-center space-x-2">
                    <ActivityIndicator size="small" color="#2563EB" />
                    <Text className="text-blue-600 font-medium ml-2">
                        Fetching location...
                    </Text>
                </View>
            ) : (
                <View className="flex-row items-center">
                    {/* Icon Container */}
                    <View className="bg-white p-2.5 rounded-full shadow-sm mr-4" style={{ elevation: 2 }}>
                        <Ionicons
                            name="navigate"
                            size={20}
                            color="#2563EB"
                        />
                    </View>

                    {/* Text Container */}
                    <View>
                        <Text className="text-blue-800 font-bold text-sm tracking-wide">
                            Use Current Location
                        </Text>
                        <Text className="text-xs text-blue-400/80 font-medium mt-0.5">
                            Tap to auto-detect your address
                        </Text>
                    </View>
                </View>
            )}
        </Pressable>
    );
};

export default UseCurrentLocation;