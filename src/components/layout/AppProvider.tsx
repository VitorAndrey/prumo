import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

// import { REALM_APP_ID } from "@env";
import { AppProvider as RealmProvider } from "@realm/react";

import { View } from "react-native";
import { UserContextProvider } from "@contexts/UserContext";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1">
      {/* <RealmProvider id={REALM_APP_ID}> */}
      <UserContextProvider>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          {children}
        </SafeAreaProvider>
      </UserContextProvider>
      {/* </RealmProvider> */}
    </View>
  );
}
