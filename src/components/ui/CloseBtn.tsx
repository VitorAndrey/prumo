import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { X } from "lucide-react-native";
import { twMerge } from "tailwind-merge";

type CloseBtnProps = TouchableOpacityProps & {};

export default function CloseBtn({ className, ...rest }: CloseBtnProps) {
  return (
    <TouchableOpacity {...rest} className={twMerge("", className)}>
      <X color="black" />
    </TouchableOpacity>
  );
}
