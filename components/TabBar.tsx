import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config.js";
import colors from "tailwindcss/colors";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "theme/themeContext";

const TabBar = ({ state, descriptors, navigation }) => {
  const { theme } = useTheme();
  const fullConfig = resolveConfig(tailwindConfig);
  const iconSize = 16;
  const icons = {
    index: (props) => (
      <MaterialCommunityIcons
        name="music-box-multiple-outline"
        size={iconSize}
        color={
          props.isFocused ? fullConfig.theme.colors[theme] : colors.stone[400]
        }
        {...props}
      />
    ),
    artists: (props) => (
      <MaterialCommunityIcons
        name="account-music-outline"
        size={iconSize}
        color={
          props.isFocused ? fullConfig.theme.colors[theme] : colors.stone[400]
        }
        {...props}
      />
    ),
    recent: (props) => (
      <MaterialIcons
        name="access-time"
        size={iconSize}
        color={
          props.isFocused ? fullConfig.theme.colors[theme] : colors.stone[400]
        }
        {...props}
      />
    ),
  };
  return (
    <View className="bg-stone-600">
      <View className="flex flex-row bg-stone-600 align-middle py-2 px-4 justify-between mx-2">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              className="flex justify-center text-center px-2 h-8 w-24"
            >
              <View className="flex flex-row justify-center space-x-1 items-center">
                <View className="">
                  {icons[route.name]({
                    isFocused,
                  })}
                </View>
                <Text
                  //@ts-expect-error not recognized
                  style={{
                    color: isFocused
                      ? fullConfig.theme.colors[theme]
                      : colors.stone[400],
                  }}
                  className={
                    "text-center text-xs " + (isFocused ? `font-medium` : "")
                  }
                >
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
