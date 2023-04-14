import React from "react";

interface InputProps {
  type: "text" | "password" | "email";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  htmlForName?: string;
  children?: string;
}

const Input: React.FC<InputProps> = ({
  children,
  htmlForName,
  placeholder,
  type,
  onChange,
  required,
}: InputProps) => {
  return (
    <>
      {children ? (
        <>
          <label htmlFor={htmlForName} className="text-[16px] font-medium underline">
            {children}
          </label>
          <input
            className="max-w-[240px] bg-amber-300 p-3 rounded-xl placeholder:text-sky-500"
            name={htmlForName}
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
