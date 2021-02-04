import React from "react";
import { users } from "../../data/users";
import { ListUserItem } from "../ListUserItem/ListUserItem";

export const ListUser = () => (
  <>
    {users.map((dataUsers) => (
      <ListUserItem dataUsers={dataUsers} />
    ))}
  </>
);
