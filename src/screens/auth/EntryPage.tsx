import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigationRoutesProps } from "@routes/auth.routes";

import { Text } from "@ui/Text";
import { Button } from "@ui/Button";

export function EntryPage() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  function handleNavigateToLogin() {
    navigation.navigate("Login");
  }

  function handleNavigateToRegister() {
    navigation.navigate("Register");
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-evenly">
      <Text>Prumo Inovação</Text>

      <View className="gap-4 flex-col">
        <Button onPress={handleNavigateToLogin}>Fazer Login</Button>
        <Button onPress={handleNavigateToRegister}>Fazer Cadastro</Button>
      </View>
    </SafeAreaView>
  );
}
