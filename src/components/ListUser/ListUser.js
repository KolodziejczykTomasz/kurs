import React from "react";
import { users } from "data/users";
import { ListUserItem } from "components/ListUserItem/ListUserItem";
import { Wrapper, Header, Content } from "./ListUser.styles";

export const ListUser = () => (
  <>
    <Wrapper>
      <Header>Średnia ocen uczniów</Header>
      <Content>
        {users.map((dataUsers) => (
          <ListUserItem key={dataUsers.name} dataUsers={dataUsers} />
        ))}
      </Content>
    </Wrapper>
  </>
);
