import { TextInput, View, ViewProps, TextInputProps } from "react-native";
import { twMerge, ClassNameValue } from "tailwind-merge";

type InputProps = {
  containerProps?: ViewProps & {
    containerClass?: ClassNameValue;
  };
  inputProps?: TextInputProps & {
    inputClass?: ClassNameValue;
  };
};

export function Input({ containerProps, inputProps }: InputProps) {
  return (
    <View
      className={twMerge(
        "h-12 flex-row items-center rounded-2xl bg-zinc-300 px-4",
        containerProps?.containerClass
      )}
      {...containerProps}
    >
      <TextInput
        className={twMerge(
          "h-12 flex-1 font-poppins-400 text-sm",
          inputProps?.inputClass
        )}
        {...inputProps}
      />
    </View>
  );
}
