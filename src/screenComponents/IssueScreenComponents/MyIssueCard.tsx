import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../../api/Axios";

type IssueStatus = "IN_PROGRESS" | "PENDING" | "RESOLVED" | "OPEN";

const STATUS_CONFIG: Record<
  IssueStatus,
  { border: string; badge: string; text: string }
> = {
  IN_PROGRESS: {
    border: "bg-blue-500",
    badge: "bg-blue-500",
    text: "IN PROGRESS",
  },
  PENDING: {
    border: "bg-orange-400",
    badge: "bg-orange-400",
    text: "PENDING",
  },
  RESOLVED: {
    border: "bg-green-500",
    badge: "bg-green-500",
    text: "RESOLVED",
  },
  OPEN: {
    border: "bg-red-500",
    badge: "bg-red-500",
    text: "OPEN",
  },
};

interface MyIssueCardProps {
  status?: IssueStatus;
}

const MyIssueCard: React.FC<MyIssueCardProps> = ({
  status = "IN_PROGRESS",
}) => {
  const navigation = useNavigation();
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/issues')
      .then((response) => setIssues(response.data))
      .catch((error) => console.error('Error fetching issues:', error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {issues.map((issue: any, index: number) => {
        const issueStatus = (issue.status as IssueStatus) || status;
        const config = STATUS_CONFIG[issueStatus] || STATUS_CONFIG["OPEN"];
        return (
          <Pressable
            key={issue.id || index}
            onPress={() => {
              navigation.getParent()
                ?.navigate("IssueDetail", {
                  id: "1"
                });
            }}
            className="flex-row bg-white rounded-2xl overflow-hidden mb-5 "
            android_ripple={{ color: "#E5E7EB" }}
            style={({ pressed }) => [
              pressed && { opacity: 0.97, transform: [{ scale: 0.995 }] },
            ]}
          >
            {/* Status Accent */}
            <View className={`w-1.5 h-100 ${config.border}`} />

            <View className="flex-1 px-4 py-5">
              {/* Issue ID */}
              <View className="flex-row items-center mb-2">
                <Ionicons name="image-outline" size={14} color="#6B7280" />
                <Text className="ml-2 text-gray-500 text-xs font-medium">
                  {`A#0536${issue.id}`}
                </Text>
              </View>

              {/* Title */}
              <Text
                className="text-[15px] font-semibold text-gray-900 mb-3"
                numberOfLines={1}
              >
                {issue.title}
              </Text>

              {/* address */}
              <View className="flex-row items-center mb-2">
                <Ionicons name="location-outline" size={14} color="#6B7280" />
                <Text className="ml-2 text-gray-600 text-sm">
                  {issue.address}
                </Text>
              </View>

              <View className="flex-row items-center">
                <MaterialIcons name="access-time" size={14} color="#6B7280" />
                <Text className="ml-2 text-gray-600 text-sm">
                  3 days left
                </Text>
              </View>
            </View>

            {/* Right Side */}
            <View className="justify-between items-end px-4 py-5">
              <View className={`px-3 py-1 rounded-full ${config.badge}`}>
                <Text className="text-white text-[11px] font-semibold tracking-wide">
                  {config.text}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={20}
                color="#9CA3AF"
              />
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default MyIssueCard;
