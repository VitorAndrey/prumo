import axios from "axios";

import { User, UserLogin, UserRegister } from "@models/index";

export async function userLogin(data: UserLogin): Promise<User> {
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
    password: "123",
    imageUrl: "https?//github.com/Jhon.png",
    role: "manager",
  };
}

export async function userRegister(data: UserRegister) {
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
    password: "123",
  };
}
