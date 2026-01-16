import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import  SearchBar  from '../screenComponents/IssueScreenComponents/SearchBar'

const Issues = () => {
  return (
    <ScrollView
      className="bg-background-bgcolor"
      contentContainerStyle={{ padding: 26, paddingBottom: 90, }}
    >
      <SearchBar/>
      <Text>Issues</Text>
    </ScrollView>

  )
}

export default Issues