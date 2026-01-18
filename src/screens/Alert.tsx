import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import NotificationCard from '../screenComponents/AlertScreenComponents/NotificationCard'

const Alert = () => {
  return (
    <ScrollView
      className="bg-background"
      contentContainerStyle={{ padding: 26, paddingBottom: 90, }}
    >
      <View>
        <Text className='text-2xl font-semibold mb-4'>Notification</Text>
      </View>
      <NotificationCard/>
      <NotificationCard/>
      <NotificationCard/>
    </ScrollView>
  )
}

export default Alert