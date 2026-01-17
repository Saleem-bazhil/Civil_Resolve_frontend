import React from "react";
import { View, Text } from "react-native";

const IssueDescription = () => {
    return (
        <View className="bg-white px-6 py-5 rounded-2xl border border-gray-200">
            {/* Section Title */}
            <Text className="text-lg font-semibold text-gray-900">
                Description
            </Text>

            {/* Description Content */}
            <Text className="mt-3 text-base leading-7 text-gray-500">
                There is a large pothole approximately 2 feet wide and 6 inches deep on
                Main Street near the intersection with Oak Avenue. It has been causing
                traffic slowdowns and is a hazard for motorcycles and smaller vehicles.
            </Text>
        </View>
    );
};

export default IssueDescription;
