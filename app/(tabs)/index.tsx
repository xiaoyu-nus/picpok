import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import Header from "components/Header";
import { Stack, Tabs, useRouter } from "expo-router";
import React from "react";
import { View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "tailwindcss/colors";

interface Collection {
  name: string;
}

const Index = () => {
  const collections: Collection[] = [
    {
      name: "华语女",
    },
    {
      name: "华语男",
    },
    {
      name: "日本語",
    },
  ];
  return (
    <SafeAreaView className="bg-stone-600">
      <Header>
        <View className="flex flex-row justify-end h-full align-center items-center">
          <TouchableOpacity className="">
            <Text>
              <Entypo name="plus" size={24} color={colors.stone[700]} />
            </Text>
          </TouchableOpacity>
        </View>
      </Header>
      <View className="flex h-full bg-stone-600 ">
        <View className="flex flex-col space-y-6 justify-center items-center w-full ">
          <FlatList
            className="w-full px-8 py-4"
            data={collections}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            renderItem={({ item }) => (
              <View className="justify-center p-2 justify-center ">
                <TouchableOpacity className="bg-stone-700 rounded w-full mx-auto py-2 ">
                  <Text className="text-stone-300 font-medium text-center">
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
