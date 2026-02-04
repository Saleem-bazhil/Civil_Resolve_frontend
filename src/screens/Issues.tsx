import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SearchBar from '../screenComponents/IssueScreenComponents/SearchBar'
import MyIssueCard from '../screenComponents/IssueScreenComponents/MyIssueCard'

const Issues = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <ScrollView
      className="bg-background-bgcolor"
      contentContainerStyle={{ padding: 26, paddingBottom: 30, }}
    >
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <MyIssueCard searchQuery={searchQuery} />
    </ScrollView>

  )
}

export default Issues