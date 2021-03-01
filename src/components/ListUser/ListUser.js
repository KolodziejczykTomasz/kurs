import React, { useState, useEffect } from "react";
import { users as usersData } from "data/users";
import { ListUserItem } from "components/ListUserItem/ListUserItem";
import { Wrapper, Header, Content } from "./ListUser.styles";


const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: "Error" });
      }
    }, 2000);
  });
};



export const ListUser = () =>{

  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <>
      <Wrapper>
        <h1>{isLoading ? "Loading..." : null}</h1>
        <Header>Średnia ocen uczniów</Header>
        <Content>
          {users.map((dataUsers, i) => (
            <ListUserItem
              index={i}
              key={dataUsers.name}
              dataUsers={dataUsers}
              deleteUser={deleteUser}
            />
          ))}
        </Content>
      </Wrapper>
    </>
  );};
