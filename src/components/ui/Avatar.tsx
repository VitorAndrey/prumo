import { Image, View, ViewProps } from "react-native";
import { twMerge } from "tailwind-merge";

type AvatarProps = ViewProps & {
  url?: string;
};

export function Avatar({
  className,
  url = "https://github.com/Jhon.png",
  ...rest
}: AvatarProps) {
  return (
    <View
      className={twMerge("h-10 w-10 rounded-full overflow-hidden", className)}
      {...rest}
    >
      <Image source={{ uri: url }} className="w-full h-full" />
    </View>
  );
}
