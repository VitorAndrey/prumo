import { View } from "react-native";
import CloseBtn from "@ui/CloseBtn";

type CloseHeaderProps = {
  onClose: () => void;
};

export function CloseHeader({ onClose }: CloseHeaderProps) {
  return (
    <View className="w-full h-14 justify-center px-4 py-2">
      <CloseBtn onPress={onClose} />
    </View>
  );
}
