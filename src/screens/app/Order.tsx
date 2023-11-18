import { useContext, useState } from "react";
import { Text } from "@ui/Text";
import { View } from "react-native";
import { Header } from "@layout/Header";
import { Title } from "@layout/Title";
import { Button } from "@ui/Button";
import { UserContext } from "@contexts/UserContext";
import CloseBtn from "@ui/CloseBtn";
import { CloseHeader } from "@layout/CloseHeader";
import { SelectList } from "react-native-dropdown-select-list";

export function Order() {
  const [selected, setSelected] = useState("");
  const [isOrdering, setIsOrdering] = useState<boolean>(false);

  const stores = [
    { key: "1", value: "Mobiles" },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers" },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
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
    <View className="flex-1">
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
    </View>
  );
}
