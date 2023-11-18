import { Header } from "@layout/Header";
import { Title } from "@layout/Title";
import { Text } from "@ui/Text";
import { View } from "react-native";

export function Supplier() {
  return (
    <View className="flex-1">
      <Header />

      <Title>Fornecedores</Title>

      <Text>Supplier</Text>
    </View>
  );
}
