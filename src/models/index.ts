export type User = {
  name: string;
  email: string;
  password: string;
  imageUrl: string;
  role: "manager" | "foreman";
};

export type Supplier = {};

export type Order = {
  date: string;
};

export type UserLogin = {
  email: string;
  password: string;
};

export type UserRegister = Omit<User, "role">;
