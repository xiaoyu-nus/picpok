import { Stack } from "expo-router/stack";
import * as NavigationBar from "expo-navigation-bar";
import { ThemeProvider } from "theme/themeContext";
import colors from "tailwindcss/colors";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  NavigationBar.setBackgroundColorAsync("black");
  return (
    <ThemeProvider>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
