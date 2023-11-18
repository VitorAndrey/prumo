import { View, Text, ViewProps } from "react-native";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TitleProps = ViewProps & {
  children: ReactNode;
};

export function Title({ className, children }: TitleProps) {
  return (
    <View className={twMerge("self-center my-4", className)}>
      <Text className="text-xl font-semibold">{children}</Text>
    </View>
  );
}
