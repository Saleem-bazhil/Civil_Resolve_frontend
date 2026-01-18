import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ReportHeader from '../screenComponents/ReportScreenComponents/ReportHeader'
import ReportCardCategory from '../screenComponents/ReportScreenComponents/ReportCardCategory'

const ReportIssue = () => {
  return (
    <ScrollView
      className='bg-background'
      contentContainerStyle={{ padding: 26, paddingBottom: 100, }}>
      <ReportHeader />
      <ReportCardCategory/>
    </ScrollView>

  )
}

export default ReportIssue