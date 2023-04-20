import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "submit" | "reset" | "button" | undefined;
  variant?: "primary" | "secondary";
  children: string | ReactNode;
  disabled?: boolean;
  handleClick?: any;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  disabled,
  handleClick,
  variant = "primary",
}) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={disabled}
      className={`flex items-center rounded-xl text-white text-[16px] ${
        variant === "primary" ? "bg-sky-600 py-2 px-4" : "my-2 mx-4"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
