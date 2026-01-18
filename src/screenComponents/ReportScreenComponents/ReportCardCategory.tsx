import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import {
    Zap,
    Droplets,
    MapPin,
    Trash2,
    Lightbulb,
    Waves,
    Building2,
    ClipboardList,
} from "lucide-react-native";

const CATEGORIES = [
    {
        key: "road",
        title: "Road & Footpath",
        desc: "Potholes, damaged roads",
        icon: MapPin,
        color: "#64748b",
    },
    {
        key: "water",
        title: "Water Supply",
        desc: "Leaks, shortage, quality",
        icon: Droplets,
        color: "#2563eb",
    },
    {
        key: "electricity",
        title: "Electricity",
        desc: "Outage, faulty wiring",
        icon: Zap,
        color: "#f59e0b",
    },
    {
        key: "sanitation",
        title: "Sanitation",
        desc: "Garbage, waste",
        icon: Trash2,
        color: "#64748b",
    },
    {
        key: "street",
        title: "Street Lights",
        desc: "Broken, not working",
        icon: Lightbulb,
        color: "#eab308",
    },
    {
        key: "drainage",
        title: "Drainage",
        desc: "Blocked, overflow",
        icon: Waves,
        color: "#06b6d4",
    },
    {
        key: "property",
        title: "Public Property",
        desc: "Parks, benches",
        icon: Building2,
        color: "#6366f1",
    },
    {
        key: "other",
        title: "Other",
        desc: "General issues",
        icon: ClipboardList,
        color: "#a855f7",
    },
];

const ReportCardCategory = () => {
    const [selected, setSelected] = useState("water");

    return (
        <View className="flex-row flex-wrap -m-2">
            {CATEGORIES.map(({ key, title, desc, icon: Icon, color }) => {
                const isActive = selected === key;

                return (
                    <Pressable
                        key={key}
                        className="w-1/2 p-2"
                        onPress={() => setSelected(key)}
                        accessibilityRole="button"
                        accessibilityState={{ selected: isActive }}
                        style={({ pressed }) => ({
                            transform: [{ scale: pressed ? 0.96 : 1 }],
                        })}
                    >
                        <View
                            className={`h-40 rounded-2xl items-center justify-center border
                                ${isActive
                                    ? "bg-blue-50 border-blue-600"
                                    : "bg-white border-gray-200"
                                }
                                `}
                        >
                            <View className="mb-3">
                                <Icon
                                    size={32}
                                    color={isActive ? "#2563eb" : color}
                                />
                            </View>

                            <Text className="text-base font-bold text-gray-800 text-center mb-1">
                                {title}
                            </Text>

                            <Text className="text-xs text-gray-500 text-center leading-4">
                                {desc}
                            </Text>
                        </View>
                    </Pressable>
                );
            })}
        </View>
    );
};

export default ReportCardCategory;
