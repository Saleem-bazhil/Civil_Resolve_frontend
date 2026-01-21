import { View, ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import api from "../api/Axios";

import IssueHeader from "../screenComponents/IssueDetailScreenComponents/IssueHeader";
import PhotoCard from "../screenComponents/IssueDetailScreenComponents/PhotoCard";
import IssueDescription from "../screenComponents/IssueDetailScreenComponents/IssueDescription";
import IssueTopNavigate from "../screenComponents/IssueDetailScreenComponents/IssueTopNavigate";
import IssueDeadline from "../screenComponents/IssueDetailScreenComponents/IssueDeadline";
import AssignedOfficer from "../screenComponents/IssueDetailScreenComponents/AssignedOfficer";
import StatusTimeline from "../screenComponents/IssueDetailScreenComponents/StatusTimeline";

/* 🔹 Status aligned with backend */
export type IssueStatus = "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";

/* 🔹 Issue model EXACTLY matching API */
export interface Issue {
  id: number;
  title: string;
  description: string;
  imageUrl?: string | null;
  address: string;
  landmark?: string | null;
  category?: string | null;
  area?: string | null;
  status: IssueStatus;

  createdAt: string;
  updatedAt: string;

  citizenId: number;
  departmentId?: number | null;
  officerId?: number | null;

  slaDeadline?: string | null;
  slaBreached: boolean;
  escalationLevel: number;
}

const IssueDetail = () => {
  const route = useRoute<any>();
  const { id } = route.params;

  const [issueDetail, setIssueDetail] = useState<Issue | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/issues/${id}`)
      .then(res => setIssueDetail(res.data))
      .catch(err => console.error("Error fetching issue:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Text>Loading issue...</Text>;
  if (!issueDetail) return <Text>Issue not found</Text>;

  const issue = issueDetail;

  return (
    <View className="flex-1 bg-background-bgcolor">
      <IssueTopNavigate issue={issue} />

      <ScrollView contentContainerStyle={{ padding: 26 }}>
        <IssueHeader issue={issue} />
        <PhotoCard imageUrl={issue.imageUrl} />
        <IssueDescription description={issue.description} />
        <IssueDeadline slaDeadline={issue.slaDeadline} />
        <AssignedOfficer officerId={issue.officerId} />
        <StatusTimeline status={issue.status} />
      </ScrollView>
    </View>
  );
};

export default IssueDetail;
