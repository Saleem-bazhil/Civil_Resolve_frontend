import { View, ScrollView } from "react-native";
import React from "react";
import IssueHeader from "../screenComponents/IssueDetailScreenComponents/IssueHeader";
import PhotoCard from "../screenComponents/IssueDetailScreenComponents/PhotoCard";
import IssueDescription from "../screenComponents/IssueDetailScreenComponents/IssueDescription";
import IssueTopNavigate from "../screenComponents/IssueDetailScreenComponents/IssueTopNavigate";
import IssueDeadline from "../screenComponents/IssueDetailScreenComponents/IssueDeadline";
import AssignedOfficer from "../screenComponents/IssueDetailScreenComponents/AssignedOfficer";
import StatusTimeline from "../screenComponents/IssueDetailScreenComponents/StatusTimeline";

const IssueDetail = () => {
  return (
    <View className="flex-1 bg-background-bgcolor">
      <IssueTopNavigate />
      <ScrollView contentContainerStyle={{ padding: 26 }}>
        <IssueHeader />

        <PhotoCard />
        <IssueDescription />
        <IssueDeadline/>
        <AssignedOfficer/>
        <StatusTimeline/>
      </ScrollView>
    </View>
  );
};

export default IssueDetail;
