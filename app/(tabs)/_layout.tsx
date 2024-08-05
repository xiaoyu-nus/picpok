import FontAwesome from "@expo/vector-icons/FontAwesome";
import TabBar from "components/TabBar";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Collections",
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
        name="songs"
        options={{
          title: "Songs",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
