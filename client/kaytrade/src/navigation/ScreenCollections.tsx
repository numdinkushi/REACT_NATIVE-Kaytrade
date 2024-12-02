
import SplashScreen from "../screens/deeplinks/SplashScreen";
import BottomTab from "./BottomTab";

export const authStacks = [
  {
    name: "SplashScreen",
    component: SplashScreen,
  },
];

export const dashboardStack = [
  {
    name: "BottomTab",
    component: BottomTab,
  },
];

export const mergedStacks = [...dashboardStack,  ...authStacks];
