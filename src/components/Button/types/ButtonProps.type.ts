import { ButtonVariant } from "./ButtonVariant.enum";

export default interface ButtonProps {
  label: string;
  variant: ButtonVariant;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  icon?: string;
}
