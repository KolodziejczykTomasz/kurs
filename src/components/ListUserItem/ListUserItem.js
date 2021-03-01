import React from "react";
import PropTypes from "prop-types";
import { Button } from "components/Button/Button";
import {
  Wrapper,
  Average,
  Name,
  Attendance,
  Container,
} from "./ListUserItem.styles";

export const ListUserItem = ({
  deleteUser,
  dataUsers: { name, attendance = "0%", average },
}) => {
  return (
    <>
      <Wrapper>
        <Average value={average}>{average}</Average>
        <Container>
          <Name>{name}</Name>
          <Attendance>{attendance}</Attendance>
        </Container>
        <Button type="button" onClick={() => deleteUser(name)} />
      </Wrapper>
    </>
  );
};

ListUserItem.propTypes = {
  dataUsers: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
  }),
};
