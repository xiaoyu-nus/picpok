import FontAwesome from "@expo/vector-icons/FontAwesome";
import TabBar from "components/TabBar";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { ThemeProvider } from "theme/themeContext";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Space",
        }}
      />
      <Tabs.Screen
        name="artists"
        options={{
          title: "Artists",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="recent"
        options={{
          title: "Recent",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
