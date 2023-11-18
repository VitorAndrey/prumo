import { useContext } from "react";
import { View } from "react-native";

import { UserContext } from "@contexts/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "@routes/app.routes";

import { Text } from "@ui/Text";
import { Button } from "@ui/Button";
import { Avatar } from "@ui/Avatar";
import { CloseHeader } from "@layout/CloseHeader";

export function Profile() {
  const { handleSetUser } = useContext(UserContext);

  const navigation = useNavigation<AppNavigationRoutesProps>();

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleLogOut() {
    handleSetUser(null);
  }

  return (
    <SafeAreaView className="flex-1">
      <CloseHeader onClose={handleNavigateBack} />

      <Avatar className="w-36 h-36 self-center" />

      <View className="pt-12 px-8 gap-2 flex-col flex-1">
        <Text>Fulano de tal</Text>
        <Text>Fulano de tal</Text>
        <Text>Fulano de tal</Text>
        <Text>Fulano de tal</Text>
        <Text>Fulano de tal</Text>
      </View>

      <Button className="self-center my-8" onPress={handleLogOut}>
        Log Out
      </Button>
    </SafeAreaView>
  );
}
