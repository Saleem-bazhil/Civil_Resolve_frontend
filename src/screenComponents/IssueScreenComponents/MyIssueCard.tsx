import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../../api/Axios";

type IssueStatus = "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";

const STATUS_CONFIG: Record<
  IssueStatus,
  { border: string; badge: string; text: string }
> = {
  OPEN: {
    border: "bg-red-500",
    badge: "bg-red-500",
    text: "OPEN",
  },
  IN_PROGRESS: {
    border: "bg-blue-500",
    badge: "bg-blue-500",
    text: "IN PROGRESS",
  },
  RESOLVED: {
    border: "bg-green-500",
    badge: "bg-green-500",
    text: "RESOLVED",
  },
  CLOSED: {
    border: "bg-gray-500",
    badge: "bg-gray-500",
    text: "CLOSED",
  },
};

/* status logic */
const getStatusConfig = (status: unknown) => {
  if (typeof status === "string" && status in STATUS_CONFIG) {
    return STATUS_CONFIG[status as IssueStatus];
  }
  return STATUS_CONFIG.OPEN;
};

const MyIssueCard: React.FC = () => {
  const navigation = useNavigation<any>();
  const [issues, setIssues] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/issues")
      .then((response) => setIssues(response.data))
      .catch((error) =>
        console.error("Error fetching issues:", error)
      )
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {issues.map((issue, index) => {
        const config = getStatusConfig(issue.status);

        return (
          <Pressable
            key={issue.id ?? index}
            onPress={() =>
              navigation.getParent()?.navigate("IssueDetail", {
                id: issue.id, 
              })
            }
            className="flex-row bg-white rounded-2xl overflow-hidden mb-5"
            android_ripple={{ color: "#E5E7EB" }}
          >
            {/* Status Accent */}
            <View className={`w-1.5 ${config.border}`} />

            <View className="flex-1 px-4 py-5">
              {/* Issue ID */}
              <View className="flex-row items-center mb-2">
                <Ionicons
                  name="image-outline"
                  size={14}
                  color="#6B7280"
                />
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

              {/* Address */}
              <View className="flex-row items-center mb-2">
                <Ionicons
                  name="location-outline"
                  size={14}
                  color="#6B7280"
                />
                <Text className="ml-2 text-gray-600 text-sm">
                  {issue.address}
                </Text>
              </View>

              <View className="flex-row items-center">
                <MaterialIcons
                  name="access-time"
                  size={14}
                  color="#6B7280"
                />
                <Text className="ml-2 text-gray-600 text-sm">
                  3 days left
                </Text>
              </View>
            </View>

            {/* Right Side */}
            <View className="justify-between items-end px-4 py-5">
              <View
                className={`px-3 py-1 rounded-full ${config.badge}`}
              >
                <Text className="text-white text-[11px] font-semibold">
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
