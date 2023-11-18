import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@ui/Text";
import { Title } from "@layout/Title";
import { Header } from "@layout/Header";

export function Supplier() {
  return (
    <SafeAreaView className="flex-1">
      <Header />

      <Title>Fornecedores</Title>
    </SafeAreaView>
  );
}
