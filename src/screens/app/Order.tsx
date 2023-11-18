import { View } from "react-native";
import { useContext, useState } from "react";

import { UserContext } from "@contexts/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectList } from "react-native-dropdown-select-list";

import { Text } from "@ui/Text";
import { Button } from "@ui/Button";
import { Title } from "@layout/Title";
import { Header } from "@layout/Header";
import { CloseHeader } from "@layout/CloseHeader";

export function Order() {
  const [selected, setSelected] = useState("");
  const [isOrdering, setIsOrdering] = useState<boolean>(false);

  const stores = [
    { key: "1", value: "Fornecedor 1" },
    { key: "2", value: "Fornecedor 2" },
    { key: "3", value: "Fornecedor 3" },
    { key: "4", value: "Fornecedor 4" },
  ];

  const food = [
    { key: "1", value: "Almoço" },
    { key: "2", value: "Jantar" },
    { key: "3", value: "Café da Manhã" },
  ];

  const { userInfo } = useContext(UserContext);

  function handleStartOrdering() {
    setIsOrdering(true);
  }

  function handleStopOrdering() {
    setIsOrdering(false);
  }

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <Title>{isOrdering ? "Registrar Pedido" : "Pedidos"}</Title>

      {!isOrdering ? (
        <View className="flex-1 items-center justify-center gap-8">
          <View className="items-center">
            <Text>Olá, {userInfo?.name}!</Text>
            <Text>Gostaria de iniciar um pedido?</Text>
          </View>

          <Button onPress={handleStartOrdering}>Criar Pedido</Button>
        </View>
      ) : (
        <View className="flex-1">
          <CloseHeader onClose={handleStopOrdering} />

          <View className="px-12 flex-1">
            <SelectList
              setSelected={(val: string) => setSelected(val)}
              data={stores}
              save="value"
              placeholder="Estabelecimento"
              notFoundText="Estabelecimento não cadastrado"
              boxStyles={{ marginBottom: 20 }}
              dropdownStyles={{ marginBottom: 10 }}
            />

            <SelectList
              setSelected={(val: string) => setSelected(val)}
              data={food}
              save="value"
              search={false}
              placeholder="Alimento"
            />
          </View>

          <Button className="self-center my-8">Registrar</Button>
        </View>
      )}
    </SafeAreaView>
  );
}
