
import SplashScreen from "../screens/deeplinks/SplashScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import BottomTab from "./BottomTab";

export const authStacks = [
  {
    name: "SplashScreen",
    component: SplashScreen,
  },
  {
    name: "LoginScreen",
    component: LoginScreen,
  },
];

export const dashboardStack = [
  {
    name: "BottomTab",
    component: BottomTab,
  },
];

export const mergedStacks = [...dashboardStack,  ...authStacks];
