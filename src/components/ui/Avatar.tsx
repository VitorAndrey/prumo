import { View, ViewProps } from "react-native";
import { twMerge } from "tailwind-merge";

type AvatarProps = ViewProps & {};

export function Avatar({ className, ...rest }: AvatarProps) {
  return (
    <View
      className={twMerge("bg-red-500 h-10 w-10 rounded-full", className)}
      {...rest}
    ></View>
  );
}
