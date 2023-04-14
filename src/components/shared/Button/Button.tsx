import React from "react";

interface ButtonProps {
  children: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
