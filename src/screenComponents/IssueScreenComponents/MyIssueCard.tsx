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
    border: "bg-orange-400",
    badge: "bg-orange-400",
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

interface MyIssueCardProps {
  searchQuery?: string;
  limit?: number;
}

const MyIssueCard: React.FC<MyIssueCardProps> = ({ searchQuery = "", limit }) => {
  const navigation = useNavigation<any>();
  const [issues, setIssues] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/issues")
      .then((response) => setIssues(response.data))
      .catch((error) => console.error("Error fetching issues:", error))
      .finally(() => setLoading(false));
  }, []);

  const filteredIssues = issues.filter((issue) => {
    if (!searchQuery) return true;
    const lowerQuery = searchQuery.toLowerCase();
    const titleMatch = issue.title?.toLowerCase().includes(lowerQuery);
    const addressMatch = issue.address?.toLowerCase().includes(lowerQuery);
    const idMatch = issue.id?.toString().includes(lowerQuery);
    return titleMatch || addressMatch || idMatch;
  });

  const displayedIssues = limit ? filteredIssues.slice(0, limit) : filteredIssues;

  if (loading) {
    return <Text className="text-center mt-4">Loading...</Text>;
  }

  if (filteredIssues.length === 0) {
    return <Text className="text-gray-500 text-center mt-4">No issues matches your search</Text>;
  }

  return (
    <View className="gap-y-5">
      {displayedIssues.map((issue, index) => {
        const config = getStatusConfig(issue.status);

        return (
          <Pressable
            key={issue.id ?? index}
            onPress={() =>
              navigation.getParent()?.navigate("IssueDetail", {
                id: issue.id,
              })
            }
            className={`bg-white rounded-3xl border border-gray-200 overflow-hidden`}
            android_ripple={{ color: "#f3f4f6" }}
          >
            <View className="flex-row items-stretch">
              {/* Color Stripe */}
              <View className={`w-1.5 ${config.badge}`} />

              <View className="flex-1 p-4 pl-3.5">
                {/* Header ID & Date */}
                <View className="flex-row justify-between items-center mb-3">
                  <View className="bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">
                    <Text className="text-gray-500 text-xs font-semibold tracking-wide">
                      #{issue.id}
                    </Text>
                  </View>
                  <View className="flex-row items-center space-x-1.5">
                    <Ionicons name="calendar-outline" size={13} color="#9ca3af" />
                    <Text className="text-gray-400 text-xs font-medium">
                      {new Date(issue.createdAt || Date.now()).toLocaleDateString()}
                    </Text>
                  </View>
                </View>

                {/* Title */}
                <Text
                  className="text-[17px] font-bold text-gray-700 leading-snug mb-1.5"
                  numberOfLines={1}
                >
                  {issue.title}
                </Text>

                {/* Address */}
                <View className="flex-row items-start mb-4">
                  <Ionicons
                    name="location"
                    size={15}
                    color="#9ca3af"
                    style={{ marginTop: 2 }}
                  />
                  <Text
                    className="text-gray-500 text-[13px] ml-1.5 flex-1 leading-5"
                    numberOfLines={1}
                  >
                    {issue.address}
                  </Text>
                </View>

                {/* Footer */}
                <View className="flex-row justify-between items-center pt-3 border-t border-gray-100">

                  <View className="flex-row items-center">
                    <MaterialIcons
                      name="access-time"
                      size={14}
                      color="#6b7280"
                    />
                    <Text className="text-gray-600 text-xs font-medium ml-1.5">
                      3 days left
                    </Text>
                  </View>

                  {/* Right Side Status Badge */}
                  <View
                    className={`px-2.5 py-1 rounded-full ${config.badge} flex-row items-center`}
                  >
                    <Text className="text-white text-[10px] font-bold tracking-wider uppercase">
                      {config.text}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default MyIssueCard;