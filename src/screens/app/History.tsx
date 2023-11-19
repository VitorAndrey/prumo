import { EmptyHistory } from "@layout/EmptyHistory";
import { Header } from "@layout/Header";
import { HistoryItem } from "@layout/HistoryItem";
import { Title } from "@layout/Title";
import { Order } from "@models/index";
import { useCallback } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function History() {
  const orders = [
    { date: "12/3/2000" },
    { date: "13/3/2000" },
    { date: "14/3/2000" },
  ];

  const renderHistory = useCallback(
    ({ item }: { item: Order }) => <HistoryItem order={item} />,
    []
  );

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <Title>Histórico</Title>

      <FlatList
        data={orders}
        renderItem={renderHistory}
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 30,
          paddingVertical: 20,

          flexGrow: 1,
        }}
        ListEmptyComponent={() => <EmptyHistory />}
      />
    </SafeAreaView>
  );
}
