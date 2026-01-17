import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ProfileCard from '../screenComponents/ProfileScreenComponents/ProfileCard'

const Profile = () => {
  return (
    <ScrollView
      className="bg-background-bgcolor"
      contentContainerStyle={{ padding: 26, paddingBottom: 90, }}

    >
      <ProfileCard />
    </ScrollView>

  )
}

export default Profile