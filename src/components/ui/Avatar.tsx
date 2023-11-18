import { useContext } from "react";
import { Image, View, ViewProps } from "react-native";

import { UserContext } from "@contexts/UserContext";

import { twMerge } from "tailwind-merge";

type AvatarProps = ViewProps & {};

export function Avatar({ className, ...rest }: AvatarProps) {
  const { userInfo } = useContext(UserContext);

  const uri = userInfo?.imageUrl || "https://github.com/Jhon.png";

  return (
    <View
      className={twMerge("h-10 w-10 rounded-full overflow-hidden", className)}
      {...rest}
    >
      <Image source={{ uri }} className="w-full h-full" />
    </View>
  );
}
