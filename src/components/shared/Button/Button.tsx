import React from "react";

interface ButtonProps {
  children: string;
  type: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ type, children }: ButtonProps) => {
  return <button type={type}>{children}</button>;
};

export default Button;
