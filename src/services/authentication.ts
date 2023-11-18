import axios from "axios";

import { User } from "@models/index";

export async function userLogin(data: Omit<User, "name">): Promise<User> {
  // const url = "https://supermercadoapi.vercel.app/login";

  // const { email, password } = data;

  // try {
  //   const user: User = await axios.post(url, {
  //     email,
  //     password,
  //   });

  //   return user;
  // } catch (error) {
  //   throw new Error("Error while logging in!");
  // }

  return {
    name: "Teste",
    email: "teste@teste.com",
    password: "123"
  }
}
