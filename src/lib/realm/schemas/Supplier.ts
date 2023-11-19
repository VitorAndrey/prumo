import { Realm } from "@realm/react";

export class Supplier extends Realm.Object<Supplier> {
  static generate() {}

  static schema = {
    name: "Supplier",
    primaryKey: "_id",

    properties: {
      _id: "uuid",
      name: "string",
      location: "string",

      created_at: "string",
      updated_at: "string",
    },
  };
}
