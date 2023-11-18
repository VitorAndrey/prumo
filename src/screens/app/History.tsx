import { Header } from "@layout/Header";
import { Title } from "@layout/Title";
import { SafeAreaView } from "react-native-safe-area-context";

export function History() {
  return (
    <SafeAreaView className="flex-1">
      <Header />

      <Title>Histórico</Title>
    </SafeAreaView>
  );
}
