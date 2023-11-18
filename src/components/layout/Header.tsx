import { TouchableOpacity, View } from "react-native";

import { Avatar } from "@ui/Avatar";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "@routes/app.routes";

export function Header() {
  const navigation = useNavigation<AppNavigationRoutesProps>();

  function handleNavigateToProfile() {
    navigation.navigate("Profile");
  }

  return (
    <View className="w-full h-14 justify-center p-4 mt-2 mb-4">
      <TouchableOpacity onPress={handleNavigateToProfile}>
        <Avatar className="self-end" />
      </TouchableOpacity>
    </View>
  );
}
