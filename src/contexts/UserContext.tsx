import { User } from "@models/index";
import { ReactNode, createContext, useState } from "react";

type UserContextType = {
  isUserLogged: boolean;
  userInfo: User | null;
  handleSetUser: (newUserInfo: User | null) => void;
};

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<User | null>({
    name: "Fulano",
    email: "fulano@gmail.com",
    password: "123",
    imageUrl: "",
  });

  const isUserLogged = userInfo ? true : false;

  function handleSetUser(newUserInfo: User | null) {
    setUserInfo(newUserInfo);
  }

  return (
    <UserContext.Provider
      value={{
        isUserLogged,
        userInfo,
        handleSetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
