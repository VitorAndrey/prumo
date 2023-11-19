import { useContext, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigationRoutesProps } from "@routes/auth.routes";

import { Input } from "@ui/Input";
import { InputErrorMessage } from "@layout/InputErrorMessage";
import { UserContext } from "@contexts/UserContext";
import { userLogin } from "@services/authentication";
import { Button } from "@ui/Button";
import { CloseHeader } from "@layout/CloseHeader";
import { TextBtn } from "@ui/TextBtn";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Preencha o Email.")
      .email("Insira um Email válido."),
    password: yup
      .string()
      .required("Insira sua Senha.")
      .min(3, "A senha deve ter no mínimo 3 caracteres."),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function Login() {
  const [isLoginLoading, setIsLoginLoading] = useState<boolean>(false);

  const { handleSetUser } = useContext(UserContext);
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

    const { email, password } = data;

    try {
      const user = await userLogin({
        email,
        password,
      });

      handleSetUser(user);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoginLoading(false);
    }
  };

  function handleNavigateToEntryPage() {
    navigation.navigate("EntryPage");
  }

  function handleNavigateToRegister() {
    navigation.navigate("Register");
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
        <Text className="self-center mb-10">Logo</Text>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              inputProps={{
                onChangeText: onChange,
                onBlur: onBlur,
                value: value,
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
              }}
            />
          )}
          name="password"
        />
        <InputErrorMessage message={errors.password?.message} />

        <Button className="mt-6 self-center" onPress={handleSubmit(onSubmit)}>
          <Text>{isLoginLoading ? "Carregando..." : "Avançar"}</Text>
        </Button>

        <View className="flex-row items-center justify-center gap-1 mt-4">
          <Text>Não tem conta?</Text>
          <TextBtn onPress={handleNavigateToRegister}>
            <Text>Cadastre-se!</Text>
          </TextBtn>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
