import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  type: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  disabled,
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={disabled}
      className="flex items-center p-4 bg-sky-600 rounded-xl text-white text-[16px]"
    >
      {children}
    </button>
  );
};

export default Button;
