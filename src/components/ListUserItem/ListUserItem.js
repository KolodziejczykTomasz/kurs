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


export const ListUserItem = ({ dataUsers: { name, attendance = "0%", average } }) => (
  <>
    <Wrapper>
      <Average>{average}</Average>
      <Container>
        <Name>{name}</Name>
        <Attendance>{attendance}</Attendance>
      </Container>
      <Button/>
    </Wrapper>
  </>
);



ListUserItem.propTypes = {
  dataUsers: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
  }),
};
