import Header from "../../components/TabBar";
import { Stack, Tabs, useRouter } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { ThemeProvider } from "theme/themeContext";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="bg-stone-700">
      <View className="flex h-full bg-stone-600">
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
