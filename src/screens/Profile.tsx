import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ProfileCard from '../screenComponents/ProfileScreenComponents/ProfileCard'
import AllProfileDetail from '../screenComponents/ProfileScreenComponents/AllProfileDetail'

const Profile = () => {
  return (
    <ScrollView
      className="bg-background-bgcolor"
      contentContainerStyle={{ padding: 26, paddingBottom: 100, }}

    >
      <ProfileCard />
      <AllProfileDetail/>
    </ScrollView>

  )
}

export default Profile