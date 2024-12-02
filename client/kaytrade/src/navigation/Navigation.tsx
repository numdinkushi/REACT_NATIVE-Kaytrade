import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import { useCustomTheme } from "./Theme";
import MainNavigator from "./MainNavigator";
import { navigationRef } from "../utils/NavigationContainer";
import { useCustomTheme } from "./Theme";

const Navigation: React.FC = () => {
  const theme = useCustomTheme();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.background,
      text: theme.colors.text,
      card: theme.colors.card,
      border: theme.colors.border,
      notification: theme.colors.notification,
      primary: theme.colors.primary,
    },
  };

  return (
    <NavigationContainer ref={navigationRef} theme={MyTheme}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
