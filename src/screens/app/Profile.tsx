import { UserContext } from "@contexts/UserContext";
import { CloseHeader } from "@layout/CloseHeader";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "@routes/app.routes";
import { Avatar } from "@ui/Avatar";
import { Button } from "@ui/Button";
import { Text } from "@ui/Text";
import { useContext } from "react";
import { View } from "react-native";

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
    <View className="flex-1">
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
    </View>
  );
}
