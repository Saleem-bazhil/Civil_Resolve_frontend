import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import NotificationCard from '../screenComponents/AlertScreenComponents/NotificationCard'
import api from '../api/Axios'
import { useFocusEffect } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

const Alert = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      fetchNotifications();
    }, [])
  );

  const fetchNotifications = async () => {
    try {
      const response = await api.get('/notifications');
      setNotifications(response.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      className="bg-background"
      contentContainerStyle={{ padding: 26, paddingBottom: 30, }}
    >
      <View className="flex-row justify-between items-center mb-6">
        <Text className='text-3xl font-bold text-slate-900'>Notifications</Text>
        <Text className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
          {notifications.filter((n) => !n.read).length} New
        </Text>
      </View>

      {loading ? (
        <Text className="text-center text-gray-500 mt-10">Loading alerts...</Text>
      ) : notifications.length === 0 ? (
        <View className="items-center mt-20">
          <Ionicons name="notifications-off-outline" size={48} color="#CBD5E1" />
          <Text className="text-gray-400 mt-4 font-medium">No notifications yet</Text>
        </View>
      ) : (
        notifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))
      )}
    </ScrollView>
  )
}

export default Alert