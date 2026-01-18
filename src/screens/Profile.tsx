import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ProfileCard from '../screenComponents/ProfileScreenComponents/ProfileCard'
import AllProfileDetail from '../screenComponents/ProfileScreenComponents/AllProfileDetail'
import SignOut from '../screenComponents/ProfileScreenComponents/SignOut'

const Profile = () => {
  return (
    <ScrollView
      className="bg-background"
      contentContainerStyle={{ padding: 26, paddingBottom: 100, }}

    >
      <ProfileCard />
      <AllProfileDetail/>
      <SignOut/>
    </ScrollView>

  )
}

export default Profile