import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { X } from "lucide-react-native";
import { twMerge } from "tailwind-merge";

type CloseBtnProps = TouchableOpacityProps & {};

export default function CloseBtn({ className, ...rest }: CloseBtnProps) {
  return (
    <TouchableOpacity
      {...rest}
      className={twMerge("w-6 h-6 items-center justify-center", className)}
    >
      <X color="black" />
    </TouchableOpacity>
  );
}
