import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: string | ReactNode;
  handleClick?: any;
  otherProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  handleClick,
  variant = "primary",
  ...otherProps
}) => {
  return (
    <button
      onClick={handleClick}
      className={`flex items-center rounded-xl text-white text-[16px] ${
        variant === "primary" ? "bg-sky-600 py-2 px-4" : "my-2 mx-4"
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
