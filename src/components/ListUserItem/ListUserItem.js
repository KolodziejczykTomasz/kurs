import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Average,
  Name,
  Attendance,
  Container,
  IconClose,
} from "./ListUserItem.styles";


export const ListUserItem = ({ dataUsers: { name, attendance = "0%", average } }) => (
  <>
    <Wrapper>
      <Average>{average}</Average>
      <Container>
        <Name>{name}</Name>
        <Attendance>{attendance}</Attendance>
      </Container>
      <IconClose>X</IconClose>
    </Wrapper>
  </>
);



ListUserItem.propTypes = {
  dataUsers: {
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
  },
};
