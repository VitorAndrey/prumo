import { useContext, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "@ui/Input";
import { InputErrorMessage } from "@layout/InputErrorMessage";
import { UserContext } from "@contexts/UserContext";
import { userLogin } from "@services/authentication";

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

  return (
    <View className="flex-1">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center p-10">
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

          <TouchableOpacity
            className="mt-6 self-center"
            onPress={handleSubmit(onSubmit)}
          >
            <Text>{isLoginLoading ? "Carregando..." : "Avançar"}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
