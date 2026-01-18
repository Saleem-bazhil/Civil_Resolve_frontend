import { View, Text, Pressable } from 'react-native'
import React from 'react'

const ReportHeader = () => {
    return (
        <View className='mb-4'>
            <View className='py-4 leading-10'>
                <Text className='text-2xl font-semibold'>What type of issue?</Text>
                <Text className='text-md text-gray-400'>Select the category that best describes the problem</Text>
            </View>
        </View>
    )
}

export default ReportHeader