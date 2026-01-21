import React from "react";
import { View, Text } from "react-native";

interface IssueDescriptionProps {
  description: string;
}

const IssueDescription: React.FC<IssueDescriptionProps> = ({ description }) => {
    return (
        <View className="bg-white px-6 py-5 rounded-2xl border border-gray-200">
            {/* Section Title */}
            <Text className="text-lg font-semibold text-gray-900">
                Description
            </Text>

            {/* Description Content */}
            <Text className="mt-3 text-base leading-7 text-gray-500">
                {description}
            </Text>
        </View>
    );
};

export default IssueDescription;
