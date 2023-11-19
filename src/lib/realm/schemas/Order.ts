import { Realm } from "@realm/react";

export class Order extends Realm.Object<Order> {
  _id!: string;
  user_id!: string;
  supplier_id!: string;
  created_at!: string;

  static generate() {}

  static schema = {
    name: "Order",
    primaryKey: "_id",

    properties: {
      _id: "uuid",
      user_id: {
        type: "string",
        indexed: true,
      },
      supplier_id: {
        type: "string",
        indexed: true,
      },

      created_at: "string",
    },
  };
}
