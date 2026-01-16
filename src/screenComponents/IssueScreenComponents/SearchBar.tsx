import { View, TextInput, Pressable } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View className="mt-3">
      <View className="flex-row items-center bg-white border border-gray-200 rounded-2xl px-4 py-3">
        
        {/* Search Icon */}
        <Ionicons
          name="search-outline"
          size={18}
          color="#9CA3AF"
        />

        {/* Input */}
        <TextInput
          placeholder="Search by ID, title, or location"
          placeholderTextColor="#9CA3AF"
          className="flex-1 mx-3 text-sm text-foreground"
        />

      </View>
    </View>
  );
};

export default SearchBar;
