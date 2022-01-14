import React from "react";
import { CustomButton } from "./Button.styles";

interface IButton {
  label: string;
  onClick: () => void;
}

const Button: React.FC<IButton> = ({ label, onClick }): React.ReactElement => (
  <CustomButton variant="contained" onClick={onClick} data-testid="button">
    {label}
  </CustomButton>
);

export default Button;
