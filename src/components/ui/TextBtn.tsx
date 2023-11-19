import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React, { ReactNode } from "react";

type TextBtnProps = TouchableOpacityProps & {
  children: ReactNode;
};

export function TextBtn({ children, ...rest }: TextBtnProps) {
  return (
    <TouchableOpacity {...rest}>
      <Text className="text-orange-500">{children}</Text>
    </TouchableOpacity>
  );
}
