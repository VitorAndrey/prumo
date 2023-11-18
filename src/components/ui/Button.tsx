import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { twMerge } from "tailwind-merge";

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode;
};

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className={twMerge(
        "bg-zinc-300 w-36 items-center h-10 justify-center rounded-xl",
        className
      )}
      {...rest}
    >
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}
