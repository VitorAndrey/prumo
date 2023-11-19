import { Realm } from "@realm/react";

export class User extends Realm.Object<User> {
  static generate() {}

  static schema = {
    name: "User",
    primaryKey: "_id",

    properties: {
      _id: "uuid",
      name: "string",
      email: "string",
      employee_record: "string",
      imageUrl: "string",
      cargo: "string",
      created_at: "string",
      updated_at: "string",
    },
  };
}
