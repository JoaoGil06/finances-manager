import React from "react";
import ButtonProps from "./types/ButtonProps.type";
import {
  Button as StyledButton,
  ButtonLabel,
  ButtonIcon,
} from "./styles/Button.styledcomponent";

export const Button = ({
  label,
  onClick,
  variant,
  icon,
  type,
}: ButtonProps) => {
  if (icon) {
    return (
      <StyledButton type={type ?? "button"} variant={variant} onClick={onClick}>
        <ButtonIcon src={icon} />
        <ButtonLabel>{label}</ButtonLabel>
      </StyledButton>
    );
  }

  return (
    <StyledButton type={type ?? "button"} variant={variant} onClick={onClick}>
      <ButtonLabel>{label}</ButtonLabel>
    </StyledButton>
  );
};
