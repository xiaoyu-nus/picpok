import { Stack, Tabs, useRouter } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-black">
      <View className="flex h-full bg-neutral-600">
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
