import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useContext } from "react";
import { UserContext } from "@contexts//UserContext";

import { SafeAreaView } from "react-native-safe-area-context";

export function Routes() {
  const { isUserLogged } = useContext(UserContext);

  return (
    <SafeAreaView className="bg-theme-bg-100 flex-1">
      <NavigationContainer>
        {isUserLogged ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </SafeAreaView>
  );
}
