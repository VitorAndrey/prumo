import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { EntryPage } from "@screens/auth/EntryPage";

import { Login } from "@screens/auth/Login";
import { Register } from "@screens/auth/Register";

export type AuthRoutes = {
  EntryPage: undefined;
  Register: undefined;
  Login: undefined;
};

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="EntryPage"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="EntryPage" component={EntryPage} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}
