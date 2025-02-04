import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { FC } from "react";
import { Platform } from "react-native";
import { Colors } from "../constants/Colors";
import { FONTS } from "../constants/Fonts";
import { MutualTabIcon, PayTabIcon, StockTabIcon } from "./TabIcon";
import { RFValue } from "react-native-responsive-fontsize";
import StockTab from "../screens/StockTab";

const Tab = createBottomTabNavigator();

const BottomTab: FC = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          paddingTop: Platform.OS === "ios" ? RFValue(5) : 0,
          paddingBottom: Platform.OS === "ios" ? 30 : 10,
          backgroundColor: colors.background,
          height: Platform.OS === "android" ? 70 : 80,
        },
        tabBarActiveTintColor: Colors.active_tab,
        tabBarInactiveTintColor: "#447777",
        headerShadowVisible: true,
        tabBarLabelStyle: {
          fontFamily: FONTS.Medium,
          fontSize: Platform.OS === "ios" ? RFValue(9) : RFValue(10),
          textAlign: "center",
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === "Stocks") {
            return <StockTabIcon focused={focused} />;
          }
          if (route.name === "Mutual Funds") {
            return <MutualTabIcon focused={focused} />;
          }
          if (route.name === "Pay") {
            return <PayTabIcon focused={focused} />;
          }
        },
      })}
    >
      <Tab.Screen name="Stocks" component={StockTab} />
      {/* <Tab.Screen name="Stocks" component={StockTab} />
      <Tab.Screen name="Mutual Funds" component={MutualTab} />
      <Tab.Screen name="Pay" component={PayTab} /> */}
    </Tab.Navigator>
  );
};

export default BottomTab;
