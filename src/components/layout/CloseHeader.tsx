import { View } from "react-native";
import CloseBtn from "@ui/CloseBtn";

type CloseHeaderProps = {
  onClose: () => void;
};

export function CloseHeader({ onClose }: CloseHeaderProps) {
  return (
    <View className="w-full h-14 justify-center p-4 mt-2 mb-4">
      <CloseBtn onPress={onClose} />
    </View>
  );
}
