import { View, Text } from "react-native";
import React from "react";
import { Order } from "@models/index";

type HistoryItemProps = {
  order: Order;
};

export function HistoryItem({ order }: HistoryItemProps) {
  return (
    <View>
      <Text>{order.date}</Text>
    </View>
  );
}
