import { User } from "@models/index";
import { ReactNode, createContext, useState } from "react";

type UserContextType = {
  isUserLogged: boolean;
  userInfo: User | null;
  handleSetUser: (newUserInfo: User) => void;
};

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<User | null>({});

  const isUserLogged = userInfo ? true : false;

  function handleSetUser(newUserInfo: User) {
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
