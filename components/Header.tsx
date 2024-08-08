import { ReactNode } from "react";
import { View, Text } from "react-native";

interface HeaderProps {
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <View className="h-10 bg-stone-600 border-stone-700 px-4">{children}</View>
  );
};

export default Header;
