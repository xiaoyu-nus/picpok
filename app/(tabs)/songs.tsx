import Header from "../../components/TabBar";
import { Stack, Tabs, useRouter } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { ThemeProvider } from "theme/themeContext";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View className="flex h-full bg-gray-700">
        <Text>Songs</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
