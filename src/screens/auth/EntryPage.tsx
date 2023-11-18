import { useNavigation } from "@react-navigation/native";
import { AuthNavigationRoutesProps } from "@routes/auth.routes";
import { Button } from "@ui/Button";
import { Text } from "@ui/Text";
import { View } from "react-native";

export function EntryPage() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  function handleNavigateToLogin() {
    navigation.navigate("Login");
  }

  function handleNavigateToRegister() {
    navigation.navigate("Register");
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text>EntryPage</Text>

      <View className="gap-4 flex-col">
        <Button onPress={handleNavigateToLogin}>Fazer Login</Button>
        <Button onPress={handleNavigateToRegister}>Fazer Cadastro</Button>
      </View>
    </View>
  );
}
