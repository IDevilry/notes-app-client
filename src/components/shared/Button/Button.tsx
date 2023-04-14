import React from "react";

interface ButtonProps {
  children: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  disabled,
  handleClick,
}: ButtonProps) => {
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
