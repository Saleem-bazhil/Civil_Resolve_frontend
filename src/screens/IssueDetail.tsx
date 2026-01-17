import { View, ScrollView } from "react-native";
import React from "react";
import IssueHeader from "../screenComponents/IssueDetailScreenComponents/IssueHeader";
import PhotoCard from "../screenComponents/IssueDetailScreenComponents/PhotoCard";
import IssueDescription from "../screenComponents/IssueDetailScreenComponents/IssueDescription";
import IssueTopNavigate from "../screenComponents/IssueDetailScreenComponents/IssueTopNavigate";

const IssueDetail = () => {
  return (
    <View className="flex-1 bg-background-bgcolor">
             <IssueTopNavigate/>
      <ScrollView contentContainerStyle={{ padding: 26, paddingBottom: 90 }}>
        <IssueHeader />

        <PhotoCard/>
        <IssueDescription/>
      </ScrollView>
    </View>
  );
};

export default IssueDetail;
