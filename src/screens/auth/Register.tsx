import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigationRoutesProps } from "@routes/auth.routes";

import * as ImagePicker from "expo-image-picker";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Text } from "@ui/Text";
import { Input } from "@ui/Input";
import { Avatar } from "@ui/Avatar";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { TextBtn } from "@ui/TextBtn";
import { CloseHeader } from "@layout/CloseHeader";
import { InputErrorMessage } from "@layout/InputErrorMessage";
import { userRegister } from "@services/authentication";
import { Button } from "@ui/Button";

const schema = yup
  .object({
    name: yup.string().required("Preencha o Nome."),
    email: yup
      .string()
      .required("Preencha o Email.")
      .email("Insira um Email válido."),
    password: yup
      .string()
      .required("Defina uma Senha.")
      .min(8, "A senha deve ter no mínimo 8 caracteres."),
    confirmPassword: yup
      .string()
      .required("Confirme sua Senha.")
      .oneOf([yup.ref("password")], "As duas senhas devem combinar."),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export function Register() {
  const [isLoginLoading, setIsLoginLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const navigation = useNavigation<AuthNavigationRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoginLoading(true);

    const { name, email, password } = data;

    try {
      const user = await userRegister({
        name,
        email,
        password,
        imageUrl,
      });

      handleNavigateToLogin();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoginLoading(false);
    }
  };

  async function pickImage() {
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (photoSelected.canceled) return;

    const [image] = photoSelected.assets;

    setImageUrl(image.uri);
  }

  function handleNavigateToEntryPage() {
    navigation.navigate("EntryPage");
  }

  function handleNavigateToLogin() {
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView className="flex-1">
      <CloseHeader onClose={handleNavigateToEntryPage} />

      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingHorizontal: 40,
          paddingVertical: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity onPress={pickImage} className="mb-10">
          <Avatar
            className="w-36 h-36 self-center"
            uri={imageUrl && imageUrl}
          />
        </TouchableOpacity>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              inputProps={{
                onChangeText: onChange,
                onBlur: onBlur,
                value: value,
                placeholder: "Nome:",
              }}
            />
          )}
          name="name"
        />
        <InputErrorMessage message={errors.name?.message} />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              inputProps={{
                onChangeText: onChange,
                onBlur: onBlur,
                value: value,
                placeholder: "E-mail:",
              }}
            />
          )}
          name="email"
        />
        <InputErrorMessage message={errors.email?.message} />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              inputProps={{
                onChangeText: onChange,
                onBlur: onBlur,
                value: value,
                placeholder: "Senha:",
              }}
            />
          )}
          name="password"
        />
        <InputErrorMessage message={errors.password?.message} />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              inputProps={{
                onChangeText: onChange,
                onBlur: onBlur,
                value: value,
                placeholder: "Confirmar senha:",
              }}
            />
          )}
          name="confirmPassword"
        />
        <InputErrorMessage message={errors.confirmPassword?.message} />

        <Button className="mt-6 self-center" onPress={handleSubmit(onSubmit)}>
          <Text>{isLoginLoading ? "Carregando..." : "Avançar"}</Text>
        </Button>

        <View className="flex-row items-center justify-center gap-1 mt-4">
          <Text>Já tem conta?</Text>
          <TextBtn onPress={handleNavigateToLogin}>
            <Text>Faça Login!</Text>
          </TextBtn>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
