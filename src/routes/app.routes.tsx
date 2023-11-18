import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { History } from "@screens/app/History";

import { Order } from "@screens/app/Order";
import { Profile } from "@screens/app/Profile";
import { Supplier } from "@screens/app/Supplier";

import {
  BeefIcon,
  ClipboardListIcon,
  StoreIcon,
  User2Icon,
} from "lucide-react-native";

type AppRoutes = {
  History: undefined;
  Order: undefined;
  Supplier: undefined;
  Profile: undefined;
};

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Order"
      sceneContainerStyle={{ backgroundColor: "transparent" }}
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#222222",
        tabBarInactiveTintColor: "#999999",
        tabBarStyle: {
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <Screen
        name="Profile"
        component={Profile}
        options={{ tabBarButton: () => null, tabBarStyle: { display: "none" } }}
      />

      <Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color }) => <ClipboardListIcon color={color} />,
        }}
      />

      <Screen
        name="Order"
        component={Order}
        options={{ tabBarIcon: ({ color }) => <BeefIcon color={color} /> }}
      />

      <Screen
        name="Supplier"
        component={Supplier}
        options={{ tabBarIcon: ({ color }) => <StoreIcon color={color} /> }}
      />
    </Navigator>
  );
}
