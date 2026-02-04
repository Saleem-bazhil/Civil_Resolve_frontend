import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ReportHeader from '../screenComponents/ReportScreenComponents/ReportHeader'
import ReportCardCategory from '../screenComponents/ReportScreenComponents/ReportCardCategory'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const ReportIssue = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className='bg-background'
      contentContainerStyle={{ padding: 26, paddingBottom: insets.bottom + 10 }}>
      <ReportHeader />
      <ReportCardCategory />
    </ScrollView>

  )
}

export default ReportIssue