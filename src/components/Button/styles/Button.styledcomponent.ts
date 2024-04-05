import { styled } from "styled-components";
import { ButtonVariant } from "../types/ButtonVariant.enum";
import { ReactSVG } from "react-svg";

type ButtonProps = {
  variant: ButtonVariant;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  border-radius: 24px;

  color: ${(props) => {
    switch (props.variant) {
      case ButtonVariant.Secondary:
      case ButtonVariant.Quartenary:
        return "var(--trueLavender)";
      case ButtonVariant.Thertiary:
        return "var(--papiloArgeotus)";
      default:
        return "var(--white)";
    }
  }};

  background: ${(props) => {
    switch (props.variant) {
      case ButtonVariant.Primary:
        return "var(--venetianNights)";
      case ButtonVariant.Secondary:
        return "#F9FAFE";
      case ButtonVariant.Thertiary:
        return "#373B53";
      case ButtonVariant.Quartenary:
        return "#F9FAFE";
      case ButtonVariant.Destructive:
        return "var(--fireOpal)";
    }
  }};

  &:hover {
    background: ${(props) => {
      switch (props.variant) {
        case ButtonVariant.Primary:
          return "var(--forgottenPurple)";
        case ButtonVariant.Secondary:
          return "#DFE3FA";
        case ButtonVariant.Thertiary:
          return "var(--ruinedSmores)";
        case ButtonVariant.Quartenary:
          return "#DFE3FA";
        case ButtonVariant.Destructive:
          return "var(--americanPink)";
      }
    }};

    color: ${(props) => {
      switch (props.variant) {
        case ButtonVariant.Secondary:
        case ButtonVariant.Quartenary:
          return "var(--trueLavender)";
        case ButtonVariant.Thertiary:
          return "var(--papiloArgeotus)";
        default:
          return "var(--white)";
      }
    }};
  }

  transition: all 0.2s;
`;

export const ButtonLabel = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
`;

export const ButtonIcon = styled(ReactSVG)`
  fill: var(--forgottenPurple);
  margin-right: 1.6rem;
  background: var(--white);
  padding: 0.9rem 0.7rem 0.7rem 0.9rem;
  border-radius: 50%;
`;
