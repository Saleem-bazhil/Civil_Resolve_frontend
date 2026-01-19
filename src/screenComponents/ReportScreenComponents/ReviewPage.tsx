import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StatusBar,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";


const SectionHeader = ({ icon, title }: { icon: keyof typeof Ionicons.glyphMap; title: string }) => (
  <View className="flex-row items-center mb-3">
    <Ionicons name={icon} size={14} color="#6B7280" />
    <Text className="text-gray-500 font-bold text-xs uppercase tracking-widest ml-2">
      {title}
    </Text>
  </View>
);

const Divider = () => <View className="h-px bg-gray-100 my-4 w-full" />;

const CategoryHero = ({ name, desc }: { name: string; desc: string }) => (
  <View className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex-row items-center mb-6">
    <View className="w-12 h-12 bg-blue-600 rounded-xl items-center justify-center mr-4">
      <Ionicons name="grid-outline" size={24} color="white" />
    </View>
    <View className="flex-1">
      <Text className="text-blue-800 text-xs font-bold uppercase tracking-widest mb-1">
        Category
      </Text>
      <Text className="text-gray-900 text-lg font-bold">{name}</Text>
      <Text className="text-gray-500 text-xs" numberOfLines={1}>
        {desc}
      </Text>
    </View>
  </View>
);

const ImageGrid = ({ images }: { images: any[] }) => {
  if (!images || images.length === 0) {
    return <Text className="text-gray-400 text-sm italic pl-2">No images attached</Text>;
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
      {images.map((img, index) => (
        <Image
          key={index}
          source={{ uri: img.uri || img }}
          className="w-20 h-20 rounded-xl mr-3 bg-gray-100 border border-gray-200"
        />
      ))}
    </ScrollView>
  );
};

const HeaderBackground = () => (
  <View className="relative z-10">
    <LinearGradient
      colors={["#1E3A8A", "#2563EB"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="pt-16 pb-32 px-6 rounded-b-3xl"
      style={{ elevation: 8 }}
    >
      <View className="absolute right-0 top-10 opacity-10">
        <Ionicons name="document-text" size={120} color="white" />
      </View>
      <Text className="text-white text-3xl font-bold mb-2">Review Report</Text>
      <Text className="text-blue-100 text-base font-medium opacity-90 pr-8">
        Double check the details below.
      </Text>
    </LinearGradient>
  </View>
);

const ActionFooter = ({ onPress }: { onPress: () => void }) => (
  <View
    className="bg-white px-6 pt-5 pb-8 border-t border-gray-100"
    style={{ elevation: 15 }}
  >
    <Pressable
      onPress={onPress}
      className="rounded-2xl overflow-hidden"
      style={{
        elevation: 5,
        shadowColor: "#16A34A",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      }}
    >
      <LinearGradient
        colors={["#1E3A8A", "#2563EB"]} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="h-14 items-center justify-center flex-row"
      >
        <Text className="text-white font-bold text-lg mr-2">Submit Report</Text>
        <Ionicons name="checkmark-circle-outline" size={22} color="white" />
      </LinearGradient>
    </Pressable>
  </View>
);

const ReviewPage = () => {
  const navigation = useNavigation<any>();
  const { params } = useRoute<any>();

  const {
    category = "General Issue",
    categoryDesc = "Standard facility report",
    title = "-",
    description = "-",
    images = [],
    address = "-",
    landmark = "",
  } = params || {};

  const handleSubmit = () => {
    const payload = { category, title, description, images, address, landmark };
    console.log(" Submitting Payload:", payload);
    // navigation.navigate("Success");
  };

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#1E3A8A" />

      {/* Header */}
      <HeaderBackground />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="-mt-20 flex-1 z-20"
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
      >
        <View
          className="bg-white rounded-3xl p-6 mb-6"
          style={{
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
          }}
        >
          {/* Category Section */}
          <CategoryHero name={category} desc={categoryDesc} />

          {/* Issue Details Section */}
          <View className="mb-2">
            <SectionHeader icon="alert-circle-outline" title="Issue Details" />
            <View className="pl-2">
              <Text className="text-gray-900 text-lg font-bold mb-2">{title}</Text>
              <View className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <Text className="text-gray-700 text-sm leading-6">{description}</Text>
              </View>
            </View>
          </View>

          <Divider />

          {/* Location Section */}
          <View className="mb-2">
            <SectionHeader icon="location-outline" title="Location" />
            <View className="pl-2">
              <Text className="text-gray-800 text-base font-medium mb-1">{address}</Text>
              {landmark ? (
                <View className="flex-row items-center mt-1">
                  <Ionicons name="navigate-circle" size={14} color="#2563EB" />
                  <Text className="text-blue-600 text-xs font-bold ml-1">
                    Near: {landmark}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>

          <Divider />

          {/* Attachments Section */}
          <View>
            <View className="flex-row justify-between items-center mb-3">
              <SectionHeader icon="images-outline" title="Attachments" />
              <Text className="text-gray-400 text-xs font-bold">{images.length} files</Text>
            </View>
            <ImageGrid images={images} />
          </View>
        </View>
      </ScrollView>

      {/* Sticky Footer */}
      <ActionFooter onPress={handleSubmit} />
    </View>
  );
};

export default ReviewPage;