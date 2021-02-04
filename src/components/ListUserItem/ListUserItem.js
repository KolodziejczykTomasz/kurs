import React from "react";

export const ListUserItem = ({ dataUsers: { name, attendance, average } }) => (
  <>
    <p>name: {name}</p>
    <p>attendance: {attendance}</p>
    <p>average: {average}</p>
  </>
);
