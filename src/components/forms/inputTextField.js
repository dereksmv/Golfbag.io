import React from 'react';
import {TextField} from "@material-ui/core";
import styled from "styled-components";

const InputTextField = (props) => {
  const StyledInputTextField = styled(TextField)`
    &.add-margin-2x {
      margin-top: 16px;
    }
  `;

  return (
    <StyledInputTextField
      className={props.classes}
      label={props.label}
      id={props.id}
      defaultValue={props.value}
      variant="outlined"
      fullWidth
      InputLabelProps={{
      shrink: true,
      }}
      onChange={props.onChange}
    />
  );
};

export default InputTextField;