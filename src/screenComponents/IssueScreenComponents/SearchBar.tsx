import { View, TextInput, Pressable } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText }) => {
  return (
    <View className="my-5">
      <View className="flex-row items-center bg-white border border-gray-200 rounded-2xl px-4 py-3">

        {/* Search Icon */}
        <Ionicons
          name="search-outline"
          size={18}
          color="#9CA3AF"
        />

        {/* Input */}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Search by ID, title, or location"
          placeholderTextColor="#9CA3AF"
          className="flex-1 mx-3 text-sm text-foreground bg-transparent"
          autoCapitalize="none"
        />

      </View>
    </View>
  );
};

export default SearchBar;
