import { Stack, Tabs, useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { ThemeProvider } from "theme/themeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "components/Header";

interface Collection {
  name: string;
  count: number;
  uri?: string | null;
}

const Artists: React.FC = () => {
  const collections: Collection[] = [
    {
      name: "周杰伦",
      count: 6,
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyh8A9kSTFuu6G5qD3xVt5hLNDRNHpUXm5A&s",
    },
    {
      name: "林俊杰",
      count: 4,
      uri: "https://p0.itc.cn/q_70/images03/20230417/1a21092354d5413aaaa5fcbcb365e498.jpeg",
    },
    {
      name: "ヨルシカ",
      count: 2,
      uri: "https://i1.sndcdn.com/artworks-000384501861-5tufqu-t500x500.jpg",
    },
    {
      name: "Eason Chan",
      count: 2,
    },
  ];
  return (
    <SafeAreaView className="bg-stone-600">
      <Header>
        <View className="flex flex-row justify-end h-full align-center items-center">
          <TouchableOpacity className="">
            <Text className="text-neutral-700 font-medium">Filter</Text>
          </TouchableOpacity>
        </View>
      </Header>
      <View className="flex h-full bg-stone-600">
        <View className="flex flex-col space-y-6 justify-center items-center w-full">
          <FlatList
            className="w-full px-8 py-4"
            columnWrapperStyle={{ justifyContent: "space-between" }}
            numColumns={2}
            data={collections}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            renderItem={({ item }) => (
              <View className="justify-center p-2 justify-center mb-2">
                <TouchableOpacity className="relative justify-center items-center bg-stone-700 rounded align-middle py-2 h-32 w-32">
                  <ImageBackground
                    source={{
                      uri:
                        item.uri ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNynO2mDL09H1QCFfuP8SEEdEG5AbjBFV6Iw&s",
                    }}
                    className="flex h-32 w-32 rounded overflow-hidden"
                  >
                    <View className="bg-black/[0.6] w-full h-full flex justify-center">
                      <Text className="text-stone-300 font-medium text-center">
                        {item.name}
                      </Text>
                      <Text className="text-stone-500 text-center text-xs mt-2">
                        {item.count} Songs
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            )}
          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Artists;
