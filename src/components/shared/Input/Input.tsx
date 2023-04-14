import React from "react";

interface InputProps {
  type: "text" | "password" | "email";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  name?: string;
  children?: string;
}

const Input: React.FC<InputProps> = ({
  children,
  name,
  placeholder,
  type,
  onChange,
  required,
}: InputProps) => {
  return (
    <>
      {children ? (
        <>
          <label htmlFor={name}>{children}</label>
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
          />
        </>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
        />
      )}
    </>
  );
};

export default Input;
