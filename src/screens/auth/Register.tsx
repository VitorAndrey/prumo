import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigationRoutesProps } from "@routes/auth.routes";

import { Text } from "@ui/Text";
import { CloseHeader } from "@layout/CloseHeader";

export function Register() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  function handleNavigateToEntryPage() {
    navigation.navigate("EntryPage");
  }

  return (
    <SafeAreaView className="flex-1">
      <CloseHeader onClose={handleNavigateToEntryPage} />

      <Text>Register</Text>
    </SafeAreaView>
  );
}
