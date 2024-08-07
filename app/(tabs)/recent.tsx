import { useRouter } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-stone-700">
      <View className="flex h-full bg-stone-600">
        <Text>Recent</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
