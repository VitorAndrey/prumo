import { View, TouchableOpacity } from "react-native";
import { X } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "@routes/app.routes";

export function ProfileHeader() {
  const navigation = useNavigation<AppNavigationRoutesProps>();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <View className="w-full h-14 justify-center p-4 mt-2 mb-4">
      <TouchableOpacity onPress={handleNavigateBack}>
        <X color="black" />
      </TouchableOpacity>
    </View>
  );
}
