import React from "react";
import { ReactComponent as DeleteIcon } from "assets/icons/delete-icon.svg";
import { StyleButton } from "components/Button/Button.styles";

export const Button = () => (
  <>
    <StyleButton>
      <DeleteIcon />
    </StyleButton>
  </>
);
